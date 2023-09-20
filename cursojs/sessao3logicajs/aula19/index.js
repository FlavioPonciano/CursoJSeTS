
// Try É executada quando não há erros
// Catch É executada quando há erros
// Finally Sempre é executada, mas pode omitir caso ela não seja necessária
try {
    //console.log(a) //Criado um erro ficticio
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('Fechei o arquivo')
    //Posso ter outro bloco de try, catch e finally dentro outro bloco
    try {
        console.log(b)
    } catch (e) {
        console.log('Deu erro')
    }
} catch (e) {
    console.log('Tratando o erro') //Ele vai tratar o erro mas não vai fechar o arquivo 
} finally {
    console.log('FINALLY: Eu sempre sou executado')
}

function retornaHora (data) {
    if (data && !(data instanceof Date)) { //Se data foi enviada e não é uma instnância de Date, lança o erro
        throw new TypeError('Esperando instância de Date')
    }
    if (!data) { //Se a data não for enviada essa parte vai gerar a data
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', //Mostra dois digitos de hora, minutos e segundos
        minute: '2-digit',
        second: '2-digit',
        hour12: false //Não retorna o timezone
    })
}
try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(11) //Esse é o erro
    console.log(hora)
} catch (e) {
    //Tratar erro
    //console.log(e)
} finally {
    console.log('Tenha um bom dia')
}
