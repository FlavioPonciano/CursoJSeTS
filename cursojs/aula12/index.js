/*alert('Nossa mensagem') Esse alert está dentro do objeto window do navegador é uma função
confirm('Deseja realmente apagar a mensagem?') Não preciso utilizar mais o window.confirm
prompt('Informe o seu nome: ') Solicita uma entrada */

//Exercicio: Receber dois números, somar os dois e mostrar no alert o resultado.

let recebeNumero1 = Number(prompt('Digite um número: '))
let recebeNumero2 = Number(prompt('Digite o segundo número: '))
alert(`O resultado de ${recebeNumero1} + ${recebeNumero2} é: ${recebeNumero1 + recebeNumero2}`)
