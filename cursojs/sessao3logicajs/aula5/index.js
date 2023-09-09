//IF, ELSE IF E ELSE (PARTE 2)
const numero = 9;

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8");
} else if (1 === 1) {
  console.log(
    "Encontrando a primeira condição verdadeira mesmo que abaixo tenha outra ele só vai executar essa."
  );
} else if (numero >= 9 && numero <= 11) {
  console.log("O número está entre 9 e 11"); // essa condição sendo verdadeira não vai ser executada
} else {
  console.log("O número não está entre 0 e 11");
} //a partir do momento que uma condição for verdadeira ela vai ser executada e o restante do código não será executado

console.log("Aqui vem o resto do código...");
