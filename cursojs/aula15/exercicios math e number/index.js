const recebeNumero = Number(prompt("Digite um número: "));

numeroTitulo = document.getElementById("numeroTitulo");
mostraTexto = document.getElementById("texto");

numeroTitulo.innerHTML = `${recebeNumero}`;

mostraTexto.innerHTML = `
Raiz quadrada: ${Math.sqrt(recebeNumero)} <br />
${recebeNumero} é inteiro: ${Number.isInteger(recebeNumero)} <br />
É NaN: ${Number.isNaN(recebeNumero)} <br />
Arredondando para baixo: ${Math.floor(recebeNumero)} <br />
Arredondando para cima: ${Math.ceil(recebeNumero)} <br />
Com duas casas decimais: ${recebeNumero.toFixed(2)}
`;

/* 
Seu número é:
Raiz quadrada:
[numero] é inteiro:
É NaN:
Arredondando para baixo:
Arredondando para cima:
Com duas casas decimais:
*/
