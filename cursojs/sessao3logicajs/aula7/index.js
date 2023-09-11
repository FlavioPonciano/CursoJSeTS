// Objeto Date (Date é uma função construtora então precisa do New e primeira letra maiúscula)
const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix (quando começou a ser marcado data 0) - caso queira data menor que essa é necessário trabalhar com valores negativos
console.log(data.toString());

const tresHoras = 60 * 60 * 3 * 1000; // Calculo de três horas
const umDia = 60 * 60 * 24 * 1000; // Calculo para adicionar mais um dia
const calculoData = new Date(0 + tresHoras + umDia);
console.log(calculoData.toString());

let novaData = new Date(); //cria um horário e datas atuais
console.log(novaData.toString()); //Mostrando hora e data atual

novaData = new Date(2019, 3, 20, 15, 14, 27, 500); //Outra forma de demonnstrar
//Ano, Mês, Dia, Hora, Minutos, Segundos e Milésimos
console.log(novaData.toString()); //Nova data por escrito por isso o toString, mostrando a data como uma string

novaData = new Date(2019, 3, 20, 15, 14); //Caso não complete todas as casa com números ele vai zerar o contador, por exemplo dos minutos
//Mês começa do 0
console.log(novaData.toString());

//Data com String:
novaData = new Date("2019-04-20T020:20:59");
console.log(novaData.toString());

//Podemos pegar qualquer parte da data e horário:
let dataAtual = new Date()
console.log('Dia', dataAtual.getDate())
console.log('Mês', dataAtual.getMonth()+1) // Mês começa em zero
console.log('Ano', dataAtual.getFullYear())
console.log('Hora', dataAtual.getHours())
console.log('Minuto', dataAtual.getMinutes())
console.log('Segundo', dataAtual.getSeconds())
console.log('Millisegundo', dataAtual.getMilliseconds())
console.log('Dia da Semana', dataAtual.getDay()+1) // Dia da semana começa em zero

//Outra Maneira de puxar a data atual
console.log(Date.now()) // Dessa forma ele vai apresentar a quantidade de milissegundos desde o inicio até o momento atual]
dataAtual = new Date(1694394239296) // Pegando essa quantidade de milissegundos e jogando na date ele vai mostrar a data e hora daquele número, há servidores e locais que salvam datas dessa forma
console.log(dataAtual)

//Função que adicionar um 0 à esquerda caso o número seja menor que 10
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

//Função que formata a data e a hora para exibição
function formataData (data) {
    const dia =  zeroAEsquerda(data.getDate()) // Envolvendo o resultado com a function de 0 à esquerda
    const mes =  zeroAEsquerda(data.getMonth() + 1)
    const ano =  zeroAEsquerda(data.getFullYear())
    const hora =  zeroAEsquerda(data.getHours())
    const min =  zeroAEsquerda(data.getMinutes())
    const seg =  zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const dataFormatar = new Date()
const dataBrasil = formataData(dataFormatar)
console.log(dataBrasil)
