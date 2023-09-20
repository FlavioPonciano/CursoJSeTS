//Break e Continue - Funcionam em todos os laços

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Continue é utilizado caso não queira executar um trecho de codigo devido à alguma condição especifica 
for (let numero of numeros) {

    if (numero === 2 || numero === 5) { //Colocar mais de uma condição ou criar mais um continue, depende da lógica
        console.log('Pulei o número 2 e o 5')
        continue //continua para a próxima iteração do laço, encontrando a palavra continue ele pula para a próxima iteração do laço e não executa o que tem abaixo
    } //O código que não se quer ser executado abaixo da palavra continue, pois ela vai fazer com que o js retorne ao inicio da iteração
    if (numero === 7) {
        continue
    }
    //Break sai do bloco, ele vai quebrar o laço chegando a certa condição
    if (numero === 8) {
        console.log('O que tem abaixo não vai ser executado e o laço também será quebrado')
        break // Ele quebra o laço antes de executar o que tem abaixo do código, então sempre cuidar em que lugar está o que precisa ser executado, nesse caso o console.log está abaixo do break então ele não vai mostrar o número 8, caso contrário ele mostraria
    }


    console.log(numero)
}

//Continue e Break também funcionam no While e do While, porém o incremento precisa ser feito antes de cada break e cada continue, se não o laço vai se repetir infinitamente

let i = 0
while (i < numeros.length) {
    let numero = numeros[i]

    if (numero === 2) {
        console.log('Pulei o número 2')
        i++
        continue
    }

    console.log(numero)

    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        i++
        break
    }

    i++
}