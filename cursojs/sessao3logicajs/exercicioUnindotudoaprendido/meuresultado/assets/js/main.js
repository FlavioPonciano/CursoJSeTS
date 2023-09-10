//Calculo IMC Peso / (altura x altura)
function calcularIMC() {
    const recebePeso = document.querySelector("#recebePeso").value;
    const recebeAltura = document.querySelector("#recebeAltura").value;
    let resultado = document.querySelector("#resultado");
    let calculoDoImc = recebePeso / (recebeAltura * recebeAltura);

    if (calculoDoImc < 18.5) {
        resultado.style.background = 'yellow'
        return resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)} (Abaixo do peso)`;
    } else if (calculoDoImc >= 18.5 && calculoDoImc <= 24.9) {
        resultado.style.background = 'green'
        return resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)} (Peso Normal)`;
    } else if (calculoDoImc >= 25 && calculoDoImc <= 29.9) {
        resultado.style.background = 'yellow'
        return resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)} (Sobrepeso)`;
    } else if (calculoDoImc >= 30 && calculoDoImc <= 34.9) {
        resultado.style.background = 'red'
        return resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)} (Obesidade grau 1)`;
    } else if (calculoDoImc >= 35 && calculoDoImc <= 39.9) {
        resultado.style.background = 'red'
        return resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)} (Obesidade grau 2)`;
    } else if (calculoDoImc >= 40) {
        resultado.style.background = 'red'
        return resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)} (Obesidade grau 3)`;
    }
    
  //return (resultado.innerHTML = `O seu imc é de ${calculoDoImc.toFixed(2)}`);
}
