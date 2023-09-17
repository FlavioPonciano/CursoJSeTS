//DOM e Árvore DOM
/*
O Elemento pai do DOM é o window seguido pelo document seguido por html e pelas tags como head e body
Então document é child de window e html é child de document
o child de h1 por exemplo é um nó de texto
para atribuir um elemento filho eu preciso utilizar o appendChild
*/
container = document.querySelector('.container')
const h1 = container.querySelector('h1')
h1.style.backgroundColor = 'blue'