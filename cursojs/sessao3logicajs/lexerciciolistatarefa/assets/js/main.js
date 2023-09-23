const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

//Cria uma li para receber os dados do input e se jogada na ul tarefas
function criaLi () {
    const li = document.createElement('li')
    return li
}

//Utilizar enter para adicionar a tarefa
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { //o keyCode pode pegar fazendo um console.log no evento e que ele vai informar no console do navegador qual teclado foi pressionada
        if (!inputTarefa.value) return //Se a caixa estiver vazia não retorna nada
        criaTarefa(inputTarefa.value)
    }
})

//Limpando o input
function limpaInput () {
    inputTarefa.value = ''
    inputTarefa.focus()
}

//Adicionar um botão apagar ao lado de cada li (tarefa) criada
function criaBotaoApagar (li) {
    li.innerText += ' ' //Adicionando um espaço entre o botão e a li
    const botaoApagar = document.createElement('button') //Criando o elemento botão
    botaoApagar.innerText = 'Apagar' //Adicionando um texto ao botão
    botaoApagar.setAttribute('class', 'apagar') //Adicionando um classe "apagar ao botão"
    botaoApagar.setAttribute('title', 'Apagar essa tarefa') //Adicionando um titulo que vai mostrado quando o usuário para o cursor por cima do botão
    li.appendChild(botaoApagar) //Adicionando o botão no li
}

//Adicionando o li dentro do ul
function criaTarefa (textoInput) {
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar (li)
    salvarTarefas()
}

//Capturar evento de click
btnTarefa.addEventListener('click', function () {
    if (!inputTarefa.value) return //Se a caixa estiver vazia não retorna nada
    criaTarefa(inputTarefa.value)
})

//Função que apaga a li, no caso ela vai encontrar o elemento pai de el que é no caso o pai de apagar e apagar 
document.addEventListener('click', function (e) {
    const el = e.target //Qual elemento está sendo clicado
    
    if (el.classList.contains('apagar')) { // se o elemento el no caso o elemento clicado tiver a classe apagar
        el.parentElement.remove() //No meu elemento, o elemento pai dele será removido 
        salvarTarefas() //Salvar aqui também para adicionar ao storage e que seja apaga também do storage
    }
})

//Salvando as tarefas que estão adicionadas
function salvarTarefas () {
    const liTarefas = tarefas.querySelectorAll('li') //Pegando as li e colocando na variável
    listaDeTarefas = [] //Criando um array vazio

    //Atribuindo o texto de cada li, apagando o texto do botão apagar e adicionando cada uma ao array
    for (let tarefa of liTarefas) { //Para cada tarefa na li de tarefas
        let tarefaTexto = tarefa.innerText //recebe o texto de tarefa
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim() //Altera o texto do botão apagar pra nada e o trim retira espaços em branco antes e depois da string
        listaDeTarefas.push(tarefaTexto) //Adicionando ao array
    }

    //Esse JSON pode ser salvo, recuperado e manipulando conforme necessário
    const tarefasJSON = JSON.stringify(listaDeTarefas) //Criando uma string no JSON que posso pegar depois e transformar novamente em um array
    //Local onde é salvo no navegador
    localStorage.setItem('tarefas', tarefasJSON) //tarefas vai ser o nome utilizado para recuperar os dados e quais os dados, salvando em string por isso a conversão da lista para string json
}

//Essa função vai ler as tarefas e jogar elas novamente na ul
function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas) //Convertendo o que foi convertido pra uma string JSON devolta para um elemento JS nesse caso array
    
    //Para cada tarefa na lista de tarefas criar novamente a tarefa vai trazer de volta para o front
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()