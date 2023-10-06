const pessoas = [
    {nome: 'Luiz',    idade: 62},
    {nome: 'Maria',   idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana',  idade: 64},
    {nome: 'Wallace', idade: 47}
]

//Retorne a pessoa mais velha:
//Nesse caso de array com objetos o primeiro elemento do acumulador é o primeiro objeto ou o indicado depois das chaves e o valor é o segundo objeto
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    //Se o item idade do acumulador(objeto) for maior que valor.iddade(segundo objeto) mostre o acumulador
    if (acumulador.idade > valor.idade) return acumulador
    //Não é necessário else pois ele já retornará de o calculo for falso ele desce pra próxima linha
    return valor
})
console.log(maisVelha)