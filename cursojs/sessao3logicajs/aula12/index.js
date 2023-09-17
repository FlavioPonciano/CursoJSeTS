// FOR - Clássico - Estrutura de Repetição
//i é de index é a variável de controle; depois vem a condição; incremento da variável
for (let i = 0; i <= 2; i++) {
    console.log(`Linha ${i}`)    
}
console.log('--------')//Apenas divisor
//Posso alterar o valor inicial da variável de controle
for (let i = 500; i <= 502; i++) {
    console.log(`Linha ${i}`)    
}
console.log('--------')
//Posso indicar de quanto é o saldo da variável i+=2 pulandop de 2 em 2 e assim por diante
for (let i = 0; i <= 8; i+=2) {
    console.log(`Linha ${i}`)    
}
console.log('--------')
//Posso começar de negativo também
for (let i = -10; i <= 20; i+=10) {
    console.log(`Linha ${i}`)    
}
console.log('--------')
//Posso fazer regressivo também
for (let i = 5; i >= 0; i--) {
    console.log(`Linha ${i}`)    
}
console.log('--------')
//Verificar quais números são pares
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0
    console.log(i, par)  
}
console.log('--------')
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log(i, par)  
}
console.log('--------')
//Percorrer Array com FOR
const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana']
for (let i = 0; i < frutas.length; i++) { //nesse caso tem que ser i < frutas.length pois se não ele vai dar um valor a mais
    console.log(`Indice ${i}`, frutas[i])    
}