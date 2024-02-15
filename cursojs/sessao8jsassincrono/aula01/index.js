//Promises
//Gerando um número aleatório
function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max-min) + min) 
}

//Apenas uma função que demora um certo tempo para ser executada como se fosse uma informação vinda do servidor
function esperaAi(msg, tempo) {
    //Criando a pormise
    return new Promise((resolve, reject)=> {
        
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })




}

esperaAi('Frase 1', rand(1, 3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3)).then(resposta => {
        console.log(resposta)
    })
}).catch()
