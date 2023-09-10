//Capturar o evento de submit do formulário
const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault() //Não permite que a página seja atualizada quando o formulário é enviado
    const inputPeso = e.target.querySelector('#peso') //vai informar o elemento que está recebendo o evento com o .target
    const inputAltura = e.target.querySelector('#altura') // .target vai assegurar que o elemento está vindo do receptor do evento e no caso dá página html

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) { //se peso for falso
        setResultado('Peso inválido', false)
        return
    }
    if (!altura) { //se peso for falso
        setResultado('Altura inválida', false)
        return
    }

    const imc = getImc(peso, altura)
    const nivelImc = getNivelImc(imc)

    const msg = `Seu IMC é ${imc} ${nivelImc}.`

    setResultado(msg, true)
})

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if (imc > 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2] 
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]
    
}

function getImc (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}

//Função que cria um paragrafo
function criaP () {
    const p = document.createElement('p')//criando um parágrafo dentro do html
    return p
}

//Função que envia uma mensagem para a div resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '' //zerando o resultado

    
    const p = criaP() //aqui p recebe o paragrafo criado pela função criaP()
    
    if (isValid) {
        p.classList.add('paragrafoResultado') //se válido ele vai atribuir essa classe ao paragrafo
    } else {
        p.classList.add('bad') //se não for válido ele vai atribuir essa classe (classList.add adiciona uma ou mais classes à um elemento)
    }

    p.innerHTML = msg
    resultado.appendChild(p) //adicionando o elemento p como elemento filho de resultado para que o conteúdo de p apareça no elemento resultado
    
}