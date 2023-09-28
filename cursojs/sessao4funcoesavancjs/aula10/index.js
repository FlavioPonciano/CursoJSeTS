//Funções Recursivas - função que se chama novamente, parecido com estruturas de repetição já estudadas
function recursiva (maximo) { //valor maximo da recursa
    if (maximo >= 10) return //condição de verificação da cursa
    maximo++ //incremento do valor maximo
    console.log(maximo)
    recursiva(maximo) //retornando a chamada da recursiva para que ela realize o loop
}

recursiva(1)

//A recursividade tem um limite que geralmente o navegador estabelece para as chamadas.