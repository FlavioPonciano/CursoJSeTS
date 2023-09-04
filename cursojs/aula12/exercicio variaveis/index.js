let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

//Solução inicial:
let varAux = varB
varB = varC
varC = varA
varA = varAux
console.log(varA, varB, varC)


/*Solução com array:
[varA, varB, varC] = [varB, varC, varA]
*/