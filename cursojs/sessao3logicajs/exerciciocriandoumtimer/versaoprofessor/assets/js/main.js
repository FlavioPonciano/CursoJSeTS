function mostraRelogio () {    
    //Criando uma função que pega a hora 00:00:00
    function criaHoraDosSegundos (segundos) {
        const data = new Date(segundos * 1000) //Convertendo os millisegundos para segundo *1000
        return data.toLocaleTimeString('pt-BR', { //Configurando a hora para o Brasil
            hour12: false, //Eliminando o AM-PM
            timeZone: 'GMT' //Horário padrão mundial
        })
    }

    const relogio = document.querySelector('.relogio') //Tive que deixar a chamada da classe relógio pois ele não foi um botão clicavel e não gera evento

    let segundos = 0
    let timer //Variável criada fora do escopo da função e chamada lá dentro do iniciaRelogio() para que possa ser editada em outro local se necessário

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++
            relogio.innerHTML = criaHoraDosSegundos(segundos)
        }, 1000) //Adicionando 1 segundo a cada segundo na variável segundos com o setInterval
    }

    //Essa parte do código vai ouvir todo o documento e verificar onde foi clicado, utilizando os IF você vai indicar qual evento será realizado com cada elemento e também já acaba selecionando as classes então não preciso fazer os seletores como queryselector
    document.addEventListener('click', function (e) {
        const elementoClicado = e.target

        if (elementoClicado.classList.contains('iniciar')) { //Se o elemento clicado tem a classe iniciar...
            relogio.classList.remove('pausado') //Deixando sem a classe pausado para que a cor fique preta
            clearInterval(timer) //Esse clear faz com que o timer não se multiplique, limpando um caso seja reiniciado pelo usuário
            iniciaRelogio()
        }

        if (elementoClicado.classList.contains('pausar')) {
            relogio.classList.add('pausado') //Adicionando a classe pausado para modificar a cor para vermelho no CSS
            clearInterval(timer)
        }

        if (elementoClicado.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}
mostraRelogio()
