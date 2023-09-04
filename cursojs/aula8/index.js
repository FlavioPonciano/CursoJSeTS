const nome = 'Flávio'
const sobrenome = 'Ponciano'
const idade = 29
const peso = 130
const altura = 1.83
let imc = peso / (altura * altura)
let anoNascimento = 2023 - idade

//Template String 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc} e nasceu em ${anoNascimento}`)