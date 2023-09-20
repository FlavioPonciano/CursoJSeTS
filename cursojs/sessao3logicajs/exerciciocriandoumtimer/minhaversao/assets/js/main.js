const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar  =  document.querySelector('.pausar')
const zerar   =   document.querySelector('.zerar')
const continuar = document.querySelector('.continuar')

let recebeHora = document.querySelector('.recebeHora')
let recebeMinuto = document.querySelector('.recebeMinuto')
let recebeSegundo = document.querySelector('.recebeSegundo')

let hora = 0
let minuto = 0
let segundo = 0
let intervalo;
let pausado = false
continuar.style.display = "none"
iniciar.style.display = "inline"
pausar.style.display = "inline"

iniciar.addEventListener("click", tempo) //Caso eu iniciliaze a função ao invés de endereçar, a página abriria executando a função
pausar.addEventListener("click", pausarTempo)
continuar.addEventListener("click", retornaContagem)
zerar.addEventListener("click", zerarTempo)

function tempo () {
    intervalo = setInterval(() => {
        if(!pausado) {
            segundo += 1

            if (segundo === 60) {
                minuto++
                segundo = 0
            }

            if (minuto === 60) {
                hora++
                minuto = 0
            }

            recebeHora.textContent = formataTempo(hora)
            recebeMinuto.textContent = formataTempo(minuto)
            recebeSegundo.textContent = formataTempo(segundo)

        }
    }, 1000)

    iniciar.style.display = "none"
    relogio.style.color = 'black'
}

function pausarTempo () {
    pausado = true
    relogio.style.color = 'red'
    continuar.style.display = "inline"
    iniciar.style.display = "none"
}

function retornaContagem () {
    pausado = false
    relogio.style.color = "black"
    continuar.style.display = "none"
}

function zerarTempo () {
    clearInterval(intervalo)
    pausado = false
    segundo = 0
    minuto = 0
    hora = 0

    recebeSegundo.textContent = "00"
    recebeMinuto.textContent = "00"
    recebeHora.textContent = "00"

    iniciar.style.display = "inline"
    continuar.style.display = "none"
    relogio.style.color = 'black'
}

function formataTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo
}