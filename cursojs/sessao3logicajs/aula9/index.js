// Mais diferenças entre var e let/const
let nome = 'Flávio' //Não se pode redeclarar com let
var nome2 = 'Flávio' // var só tem escopo de função

const verdadeira = true
var nome2 = 'Alexandre' //Já com var se pode redeclarar, porém ela é sempre redeclarada, mesmo estando dentro de blocos

if (verdadeira) {
    let nome = 'André' //Posso usar let novamente com a mesma variável dentro de um escopo de bloco, essa variável está sendo criada e não redeclarada
    var nom2 = 'Rogério'
    console.log(nome, nome2)
    if (verdadeira) {
        let nome = 'Outra coisa' //Criando novamente a variável dentro de um bloco dentro de um bloco
        var nome2 = 'Ronaldo'
        console.log(nome, nome2)
        //JavaScript busca a variável primeiro no bloco mais interno, não encontrando ele vai buscando de dentro pra fora até chegar à variável com escopo global
    }
}
console.log(nome, nome2) //Ele vai utilizar o ultimo valor declarado independente do escopo só respeita escopo de função

var sobrenome = 'Miranda' //Essa variável ela é pega pela function dentro

function falaOi () {
    var nome = 'Luiz' // Porém essa variável não pode ser utilizada fora da função
    console.log(nome, sobrenome)

    if (verdadeira) {
        let nome = 'Outro nome'
        console.log(sobrenome)
    }
    console.log(nome) //Não consigo chamar a variável dentro do if pois está com let e let respeita o bloco, caso fosse var ela iria conseguir ser chamada
}
falaOi()

console.log(sobrenome2) //JS percorre o código anterior e caso não encontre e acaba elevando a variável ao topo da função de forma undefined

var sobrenome2 = 'Ponciano'

