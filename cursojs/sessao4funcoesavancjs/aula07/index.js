//Funções Imediatas (ou auto-invocadas) IIFE - Immediately invoked function expression
//Chamada normal
function qualquerCoisa () {
    console.log(123)
}

//Função imediata, trabalha dentro de parenteses sem precisar do nome realiza o processo e chamada no final com parenteses fora do parentese que a função está
(function(idade, peso, altura) { //posso preencher o parametro ou deixar vazio

    const sobrenome = 'Miranda'
    function criaNome (nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome () {
        console.log(criaNome('Luiz'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80) //() está chamando a função logo após a declaração, por isso imediata e o escopo global não afeta o código, assim como eu posso preencher o () com argumentos ou deixar vazio

//Padrão para não dar erro:
(function(){

})()
qualquerCoisa()
