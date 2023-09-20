//setInterval e setTimeout
function mostraHora () {
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

console.log(mostraHora())

//Quando eu quero trabalhar com um intervalo especifico de dentro uso setInterval()
//Vai configurar um intervalo de tempo para que uma determinada função seja executada em determinado momento

function funcaoDoInterval () {
    console.log(mostraHora())
}

//Informando a referencia da função ao setInterval sem utilizar o () ou também criando a função anonima dentro do setInterval
//setInterval(funcaoDoInterval, 1000) nesse caso pegando a função de fora
//De quanto em quanto tempo em milissegundos quer que ocorra

//Nesse caso ele coloca o setInterval dentro de uma varíavel para ser utilizado e podendo ser utilizado com o setTimeout
const timer = setInterval(function () {
    console.log(mostraHora())
}, 1000)

setTimeout(function () {
    clearInterval(timer) //Limpa zera o intervalo da função
}, 3000) // Parando a execução com o tempo desejado como por exemplo 3 segundo nesse caso

setTimeout(function (){
    console.log('Olá, mundo!')
}, 5000) //Após 5 segundos da execução ele mostra a mensagem.