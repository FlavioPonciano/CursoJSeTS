// Switch/Case
const data = new Date('1987-04-26 00:00:00')
const diaSemana = data.getDay() //Querendo saber o dia da semana que caiu a data citada acima

//Swtich é indicado para casos onde temos uma mesma variável e diferentes valores a serem verificados
/*let diaSemanaTexto

switch (diaSemana) {
    case 0: //Caso alguma condição
        diaSemanaTexto = 'Domingo' // Vai ser realizada alguma ação
        break // Finalizar e sair do loop
    case 1:
        diaSemanaTexto = 'Segunda'
        break
    case 2:
        diaSemanaTexto = 'Terça'
        break
    case 3:
        diaSemanaTexto = 'Quarta'
        break
    case 4:
        diaSemanaTexto = 'Quinta'
        break
    case 5:
        diaSemanaTexto = 'Sexta'
        break
    case 6:
        diaSemanaTexto = 'Sábado'
        break
    default: //Ultima opção caso nenhuma caiba nos casos anteriores
        diaSemanaTexto = ''
        break //Não é necessário no valor default
}
console.log(diaSemana, diaSemanaTexto)
*/

//Colocando o Swtich dentro de uma function:
function getDaySemanaTexto (diaSemana) {
    let diaSemanaTexto

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo' 
        return diaSemanaTexto //Nesse caso de function podemmos substituir o break pelo return
    case 1:
        diaSemanaTexto = 'Segunda'
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'Terça'
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'Quarta'
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'Quinta'
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'Sexta'
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'Sábado'
        return diaSemanaTexto
    default: 
        diaSemanaTexto = ''
        return diaSemanaTexto
    }
}

const diaSemanaTexto = getDaySemanaTexto(diaSemana)
console.log(diaSemana, diaSemanaTexto)
