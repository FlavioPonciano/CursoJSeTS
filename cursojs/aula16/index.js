//Básico de Array
//Criando um Array
//Index de Array 0       1        2
const alunos = ['Luiz', 'Maria', 'João'] //Array aceita basicamente tudo que for colocado nele, mas é sempre recomendado manter somente um tipo de dado por array
console.log(alunos)
console.log(alunos[1]) //chamando um indice do array

//Substituindo um elemento da array
alunos[0] = 'Eduardo'
console.log(alunos)

//Adicionando um elemento na array
alunos[3] = 'Luiza' //chamando um novo indice para adicionar o elemento, mas não tão recomendado utilizar
console.log(alunos)

//Sabendo o tamanho da array
console.log(alunos.length)

//Para adicionar um elemento sem saber o tamanho da array pode ser usado o lenght, falando para o JS adicionar mais um elemento de acordo com o tamanho da array
alunos[alunos.length] = 'Antonio'
alunos[alunos.length] = 'Fabio'
alunos[alunos.length] = 'Luana'
console.log(alunos, alunos.length)

//Tem uma função que adicionar um elemento ao final da array
alunos.push('Otavio')
console.log(alunos)

//Adicionar um elemento no inicio da array, porém todos os elementos serão movidos para o indice à frente
alunos.unshift('Alessandra') //Sendo adicionado ao indice 0 do array
console.log(alunos)

//Remover elementos do final do array
const removido = alunos.pop() //Posso armazenar esse elemento removido em uma variável (ou utilizar somente a função para excluir o elemento)
console.log(alunos, removido) //Mostrando o array sem o elemento e ao lado o elemento que foi removido

//Remover elemento do inicio do array
const removidoInicio = alunos.shift() // Da mesma forma posso usar só a função ou armazenar o elemento removido em uma variavel
console.log(alunos, removidoInicio) //Mostrando o Array sem o elemento do inicio e ao lado o elemento que foi removido

//Remover elemento mas deixando o indice vazio no array
delete alunos[2] // Ele vai mostrar que o indice está vazio com mensagem empity item
console.log(alunos)
console.log(alunos[2]) //Ele vai aparecer com undefined, qualquer acesso à um elemento que não existe ele vai aparecer undefined

//Fatiar um array
console.log(alunos.slice(0, 3)) //Posso usar normal  ou com negativo console.log(alunos.slice(0, -2))

//Array é um objeto indexado automaticamente
console.log(typeof alunos)
console.log(alunos instanceof Array) //Perguntando se essa varíavel é uma instancia de array, ou seja ela é um array