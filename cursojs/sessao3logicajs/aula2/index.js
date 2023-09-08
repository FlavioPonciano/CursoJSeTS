//Operadores lógicos
/*
&& -> AND -> E (todas as expressões precisam ser verdadeiras para retornar true)
|| -> OR -> OU (uma das expressões precisa ser verdadeira para retornar true)
! -> NOT -> NÂO (inverte uma expressão)
*/

const expressaoAnd = true && true;
const expressaoOR = true || false;

console.log(expressaoAnd)
console.log(expressaoOR)

const usuario = 'Flavio'
const senha = '12345'

//Se usuário e senha forem identicos ele vai retornar true
const vaiLogar = usuario === 'Flavio' && senha === '12345'
console.log(vaiLogar)

console.log(!true) //Ele nega uma expressão ou inverte uma expressão
console.log(!!true) //Com duas negações ou mais ele vai retornar de acordo com a sequencia, nesse caso ele retorna true, mas não é tão usual