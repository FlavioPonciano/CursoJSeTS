//Substituir o texto de h1 por uma mensagem que mostre a data atual (Quarta-Feira, 12 de Setembro de 2023 17:30)

const dataAtual = new Date()
const diaSemana = dataAtual.getDay()
const mesAno = dataAtual.getMonth()

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function mostraDiaSemana (diaSemana) {
    switch (diaSemana) {
        case 0:
            verificaDiaSemana = 'Domingo'
            return verificaDiaSemana
        case 1:
            verificaDiaSemana = 'Segunda-feira'
            return verificaDiaSemana
        case 2:
            verificaDiaSemana = 'Terça-feira'
            return verificaDiaSemana
        case 3:
            verificaDiaSemana = 'Quarta-feira'
            return verificaDiaSemana
        case 4:
            verificaDiaSemana = 'Quinta-feira'
            return verificaDiaSemana
        case 5:
            verificaDiaSemana = 'Sexta-feira'
            return verificaDiaSemana
        case 6:
            verificaDiaSemana = 'Sábado'
            return verificaDiaSemana
        default:
            verificaDiaSemana = ''
            return verificaDiaSemana
    }
}

function mostraMesAno (mesAno) {
    switch (mesAno) {
        case 0:
            verificaMesAno = 'Janeiro'
            return verificaMesAno
        case 1:
            verificaMesAno = 'Fevereiro'
            return verificaMesAno
        case 2:
            verificaMesAno = 'Março'
            return verificaMesAno
        case 3:
            verificaMesAno = 'Abril'
            return verificaMesAno
        case 4:
            verificaMesAno = 'Maio'
            return verificaMesAno
        case 5:
            verificaMesAno = 'Junho'
            return verificaMesAno
        case 6:
            verificaMesAno = 'Julho'
            return verificaMesAno
        case 7:
            verificaMesAno = 'Agosto'
            return verificaMesAno
        case 8:
            verificaMesAno = 'Setembro'
            return verificaMesAno
        case 9:
            verificaMesAno = 'Outubro'
            return verificaMesAno  
        case 10:
            verificaMesAno = 'Novembro'
            return verificaMesAno 
        case 11:
            verificaMesAno = 'Dezembro'
            return verificaMesAno
        case 12:
            verificaMesAno = 'Janeiro'
            return verificaMesAno
        default:
            verificaDiaSemana = ''
            return verificaDiaSemana
    }
}

function mostraCalendario () {
    const diaMesFinal = zeroAEsquerda(dataAtual.getDate())
    const diaSemanaFinal = mostraDiaSemana(diaSemana)
    const mesAnoFinal = mostraMesAno(mesAno)
    const anoFinal = dataAtual.getFullYear()
    const horaFinal = zeroAEsquerda(dataAtual.getHours())
    const minutoFinal = zeroAEsquerda(dataAtual.getMinutes())
    const areaTexto = document.querySelector('.container h1')

    areaTexto.textContent = `${diaSemanaFinal}, ${diaMesFinal} de ${mesAnoFinal} de ${anoFinal} ${horaFinal}:${minutoFinal}`
}
mostraCalendario()