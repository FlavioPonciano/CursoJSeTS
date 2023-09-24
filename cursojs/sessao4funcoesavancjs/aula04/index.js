//Escopo léxico = a função conhece o local onde foi declarada, tudo que foi declarado dentro dela e os vizinhos dela, caso ele não encontre dentro da função, ele vai abrindo o escopo até chegar ao escopo global

const nome = 'Luiz'

function falaNome () {
    //const nome = 'nome'- esse nome apareceria se estivesse ativa a declaração
    console.log(nome)
}

falaNome(nome)

function usaFalaNome () {
    const nome = 'Otávio' //Mesmo eu declarando aqui na segunda função ela não vai puxar essa declaração então ela vai continuar trazendo o 'Luiz'
    falaNome() //executando e não declarando novamente, nada vai mexer no contexto dela
}

usaFalaNome() //Se eu não tiver nenhum declaração vinculando essa function ela continua lembrando onde foi declarada, mas caso haja alguma declaração ela vai atualizar o escopo dentro da sua declaração original