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

//Informando a referencia da função ao setInterval sem utilizar o ()
//De quanto em quanto tempo em milissegundos quer que ocorra
setInterval(funcaoDoInterval, 1000 )