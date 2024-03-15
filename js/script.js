const enviar = document.getElementById("enviar");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const result = document.getElementById("resultado");

const pesoAbaixo = document.getElementById("pesoAbaixo");
const pesoNormal = document.getElementById("pesoNormal");
const pesoSobre = document.getElementById("pesoSobre");
const pesoObeso1 = document.getElementById("pesoObeso1");
const pesoObeso2 = document.getElementById("pesoObeso2");
const pesoObeso3 = document.getElementById("pesoObeso3");

enviar.addEventListener("click", () => {
  const pesoValor = parseInt(peso.value);
  const alturaValor = parseInt(altura.value.replace(/[,\.]/g, "")) / 100;

  const calcularImc = pesoValor / alturaValor ** 2;

  result.innerHTML = `Resultado: `;

  result.innerHTML += ` <b>${calcularImc.toFixed(2).replace(".", ",")}</b>`;

  const trs = document.querySelectorAll("tr");
  for (let i = 0; i < trs.length; i++) {
    trs[i].style.backgroundColor = "";
  }

  if (calcularImc < 18.5) {
    pesoAbaixo.style.backgroundColor = "#917f6e";
  } else if (calcularImc < 24.9) {
    pesoNormal.style.backgroundColor = "#917f6e";
  } else if (calcularImc < 29.9) {
    pesoSobre.style.backgroundColor = "#917f6e";
  } else if (calcularImc < 34.9) {
    pesoObeso1.style.backgroundColor = "#917f6e";
  } else if (calcularImc < 39.9) {
    pesoObeso2.style.backgroundColor = "#917f6e";
  } else if (calcularImc >= 40) {
    pesoObeso3.style.backgroundColor = "#917f6e";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
