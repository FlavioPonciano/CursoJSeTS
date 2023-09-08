//Avaliação de Curto-Circuito (shot-circuit)
//&& precisa de todas as expressões verdadeiras

console.log('Flávio Ponciano' && 0 && 'Maria') //Quando o JS ele encontra um valor em falso e retorna o valor em falso
console.log('Flávio Ponciano' && true && 'Maria')// Quando for tudo TRUE ele vai retornar o ultimo verificado

//No JS tudo pode ser avaliado em verdadeiro e falso
/*Valores falsos (Falsy)
-false (esse é o único literal o restante é entendido como false)
-0
-"" '' ``
null / undefined
NaN
(o restante dos valores são atgribuidos em true)
*/
console.log('Flávio Ponciano' && 0 && 'Maria')
console.log('Flávio Ponciano' && "" && 'Maria')
console.log('Flávio Ponciano' && null && 'Maria')
console.log('Flávio Ponciano' && NaN && 'Maria')

function falaOi () {
    return 'OI'
}

const vaiExecutar = false

console.log(vaiExecutar && falaOi()) //nesse caso ele está retornando falso pois vaiExecutar foi atribuido false então ele para no primeiro false, pois o && precisa de todas as expressões verdadeiras

//Na parte de OR ||
//|| precisa de apenas um retorno true para retornar o valor verdadeiro

console.log(0 || false || null || 'Flávio' || true) //Retorna apenas o primeiro valor verdadeiro no caso o nome

//Exemplo: se o usuário não escolher uma cor, o código vai atribuir uma cor padrão para ele
let corUsuario = null
let corPadrao = corUsuario || 'azul' //nesse caso retorna azul
console.log(corPadrao)

corUsuario = 'vermelho' //nesse caos retorna vermelho, pois o valor é true
corPadrao = corUsuario || 'azul'
console.log(corPadrao)

const a = 0
const b = null
const c = 'false' //está retornando esse valor pois apesar de estar escrito false ele é uma string cheia o que é um valor TRUE
const d = false
const e = NaN

console.log( a || b || c || d || e)


