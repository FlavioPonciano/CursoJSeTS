//ECMA Script é uma padronização da linguagem
nome = 'Flávio' //Não fazer assim pois ela gera uma variável global e pode dar problema nas variáveis do código

//Com o var podemos redeclarar a variável com ela mesma
var nome = 'Flavio'
var nome = 'Andre'

//Já com o let não se pode usar o let duas vezes
let recebeNome = 'Flávio'
recebeNome = 'André'

console.log(nome, recebeNome)