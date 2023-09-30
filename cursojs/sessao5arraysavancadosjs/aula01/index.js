//Revisão de Array - são dados (valores) por referência
//const nomes = ['Eduardo', 'Maria', 'Joana'] //Array literal
const nomes = new Array('Eduardo', 'Maria', 'Joana') //Construtor de array (funciona com outros tipo como String, Objetos, Funções, Números...)
const nomesCopia = [...nomes] //Para copiar os dados de um array em um novo utilizar o speadr operator que vai 'espalhar' os dados em um novo array
nomes[2] = 'João' //Alterando itens do array
delete nomes[2] //Deletando sem alterar os indices do array um item de acordo com o item dentro do array gera <empty item>
console.log(nomes)

//Como os valores de array são por referencia, ele recebe as alterações indepente da variável que esteja acessando, nesse caso abaixo as mudanças atingem tanto 'nomes' quanto 'novo'
const novo = nomes 
const removido = novo.pop() //Retirando o ultimo elemento e adicionando esse elemento em outra variável
console.log(nomes) //resultado igual para os dois tanto 'nomes' quanto 'novo'
console.log(novo)
console.log(nomesCopia) //Como o spead é feito antes da outras operações o valor retorna intacto 
console.log(nomes.length) //Tamanho do array é um atributo então não se usa parenteses
console.log(removido) //como o array está vazio o valor recebido é undfined
const removidoInicio =  nomesCopia.shift() //retira o primeiro indice do array e desloca os outro elemento
console.log(removidoInicio) //mostrando o elemento que foi retirado
nomes.push('João') //Adicionando elemento ao array no final
console.log(nomes)
nomes.unshift('Wallace') //Adicionando elemento ao inicio do array
console.log(nomes)

const nomes3 = ['Flavio', 'Maria', 'Andre', 'Ruberval', 'José']
const separandoArray = nomes3.slice(0, -1) //Removendo partes do array
console.log(separandoArray)

//Transformando string em array separada por palavras
const nome4= 'Flavio Alexandre Ponciano'
const separaString = nome4.split(' ') //Separando por espaço e jogando em um array podendo ser separado pelo quiser como virgula e tudo mais
console.log(separaString)

//Unindo novamente o array e transformando em string
const nome5 = ['Flavio', 'Alexandre', 'Ponciano']
const nomeUnido = nome5.join(' ') //Unindo o array e informando qual vai ser o serparador na string
console.log(nomeUnido)





