const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')
/* Posso criar assim:
//Percorrendo o elemento com o for e trazendo os itens que preciso
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i] //Fazendo a atribuição via desestruturação para pegar os elementos tag e texto do objeto
    let tagCriada = document.createElement(tag) //Criando o elemento com a tag selecionada
    tagCriada.innerText = texto //Adicionando o texto de acordo com a tag selecionada
    div.appendChild(tagCriada) //Adicionando as tags dentro da div
}
container.appendChild(div) //Adicionando a div dentro do container
*/
//Ou Posso fazer com nó de texto:
for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i] //Fazendo a atribuição via desestruturação para pegar os elementos tag e texto do objeto
    let tagCriada = document.createElement(tag) //Criando o elemento com a tag selecionada
    let textoCriado = document.createTextNode(texto) //Criando um nó de texto 

    tagCriada.appendChild(textoCriado) //Atribuindo o textoCriado a tagCriada
    div.appendChild(tagCriada)
}
container.appendChild(div) //Adicionando a div dentro do container