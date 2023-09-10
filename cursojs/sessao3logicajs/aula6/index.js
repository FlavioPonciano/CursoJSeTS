// Operação Ternária ? :
const pontuacaoUsuario = 1000

if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

//Utilizando operação ternária para encurtar o código: //vai trazer o mesmo resultado
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal'
//variável (Condição) ? 'Valor para verdadeiro' : 'Valor para falso'
console.log(nivelUsuario)

//Setando um valor padrão:
const corUsuario = null // Valor negativo
const corPadrao = corUsuario || 'Azul' //Nesse caso se o valor padrão for negativo ele vai setar o outro valor positivo
