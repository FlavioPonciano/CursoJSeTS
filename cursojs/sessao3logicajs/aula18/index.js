//Tratando e lançando erros (try, catch, throw)
/*
try{ //Qualquer código que potencialmente possa ociasionar um erro vem no bloco try
    console.log(naoExisto)
} catch(erro) { //caso esse erro ocorra ele é capturado pelo bloco catch
    console.log('Não existe')
    console.log(erro) //Isso é muito interessante para capturar um erro e trabalhar ele
} //mas não é interessante apresentar esse erro ao usuário por uma questão de segurança
*/

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('x e y precisam ser números') //Indicando um possível erro
        //Existem classes de erros no JS como Error - ReferenceError e outros
    }
    return x + y
}

try{
    console.log(soma(1, 2))
    console.log(soma('1', 2))
} catch(error) {
    console.log(error) //Não mostrar o erro e sim algo mais amigável
    console.log('Alguma coisa mais amigável para o usuário')
}