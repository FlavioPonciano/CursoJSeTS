//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com "A"
const pessoas = [
    {nome: 'Luiz',    idade: 62},
    {nome: 'Maria',   idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana',  idade: 32},
    {nome: 'Wallace', idade: 47}
]

//Arrow function que verifica se as pessoas tem 5 letras ou mais no nome
const pessoasComNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5)
console.log(pessoasComNomeGrande)

//Arrow function que verifica se as pessoas tem mais de 50 anos
const pessoasCom50Anos = pessoas.filter(objeto => objeto.idade > 50)
console.log(pessoasCom50Anos)

//Arrow function que verificar os nomes que terminam com A
const nomeTerminaComA = pessoas.filter((objeto) => {
    return objeto.nome.toLowerCase().endsWith('a') //Transformando todos as letras para minusculas e verificando a letra que termina
})
console.log(nomeTerminaComA)