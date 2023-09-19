const divParagrafos = document.querySelector('.paragrafos') //Selecionei a div via class
const paragrafos = divParagrafos.querySelectorAll('p') // Selecionei todos os paragrafos dentro dessa div

const estilosBody = getComputedStyle(document.body) //Puxei o estilo do body para uma variável
const backgroundColorBody = estilosBody.backgroundColor //Dessa variável eu puxei somente a cor do background

//Usando for o eu colori cada paragráfo e a fonte
for (let p of paragrafos) {
    p.style.backgroundColor = backgroundColorBody
    p.style.color = 'white'
}