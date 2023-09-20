//While e Do While - Estrutura de repetição
let controle = 0 //variável criada fora do while
while (controle <= 3) { //Essa variável de controle recebe um parametro
    console.log(controle) //a ação é realizada
    controle++ //e a atualização da variável de controle é realizada para que não ocorra um loop infinito
}

controle = 0
const nome = 'Luiz'
//Esse modelo de while utilizando o indice de uma string ou array geralmente não é muito utilizado, para esses casos é mais utilizado o for
while (controle < nome.length) {
    console.log(nome[controle])
    controle++
}

//Função para gerar número aleatório entre um determinado escopo
function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)
console.log(rand)

//Enquanto o número for diferente de 10 ele segue executando a função, quando o número for igual a 10 ele sai da função
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}
console.log('---Divisória---')
//Do While - o while checa a condição e executa o laço e o do while executa o laço e verifica a condição
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)
//Do While executa ao menos uma vez a condição, pois a checagem vem após