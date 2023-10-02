//Método Splice - mexe no array original
//Com negativo    -5      -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia']

//nomes.splice(indice, quantos elelementos quero apagar, elementos para adicionar(sepadaros por virgula))

//Quero remover do indice 4, 1 elemento
nomes.splice(4, 1)

//Quero adicionar à uma variável o elemento ou elementos removidos
let removidos = nomes.splice(0, 1)
console.log(nomes, removidos)

//Splice suporta negativo, nesse caso ele começa invertido com negativo, o indice negativo representa o tamanho da string menos o número que está enviando
removidos = nomes.splice(-2, Number.MAX_VALUE) //Posso usar (indice, Number.MAX_VALUE) para remover tudo a partir do indice mencionado 
console.log(removidos)

const nomes2 = ['Andre', 'Carlos', 'Marcio', 'Juca', 'Junior']

//Quero adicionar um elemento (posso usar o 0 para não remover nada e informar que a partir do indice 3 eu quero adicionar novos elementos, ele vai adicionar no indice indicado e jogar elementos após para frente)
const adicionados = nomes2.splice(3, 0, 'Luiz')
console.log(adicionados, nomes2)

//Quero remover um item e colocar um elemento novo no lugar, nesse caso (no indice 2, remove 1 item e adiciona o elemento)
nomes2.splice(2, 1, 'Josefino')
console.log(nomes2)

//Parecido com o pop() (do ultimo elemento, remove 1)
const removePop = nomes2.splice(-1, 1)
console.log(removePop, nomes2)

//Parecido com o shift() remover o primeiro elemento
const removeShift = nomes2.splice(0, 1)
console.log(removeShift, nomes2)

//Parecido com o push() Adiciona no final
const adicionaPush = nomes2.splice(nomes2.length, 0, 'Flavio')
console.log(adicionaPush, nomes2)

//Parecido com o unshift adiciona no inicio
const adicionaUnshift = nomes2.splice(0, 0, 'Karina')
console.log(nomes2)