/*
Escreva uma função chamada ePaisagem que receba dois argumentos, largura e altura de uma imagem (number).
Retorne True se a imagem estiver no modo paisagem.
*/
function ePaisagem (largura, altura) {
    //return largura >= altura ? true : false
    return largura >= altura //Como eu só estou retornando true ou false não preciso atribuir true ou false
}

console.log(ePaisagem(14, 5))

//Arrow Function
const ePaisagem2 = (largura, altura) => largura > altura

console.log(ePaisagem2(1080, 1920))