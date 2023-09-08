recebeNome = prompt('Digite seu nome completo: ')
document.body.innerHTML += `O seu nome é <strong>${recebeNome}</strong> <br />`
document.body.innerHTML += `O seu nome tem <strong>${recebeNome.length}</strong> letras <br />`
document.body.innerHTML += `A segunda letra do seu nome é <strong>${recebeNome[1]}</strong> <br />`
document.body.innerHTML += `Qual o primeiro índice da letra A do seu nome? ${recebeNome.indexOf('a')} <br />`
document.body.innerHTML += `Qual o ultimo índice da letra A do seu nome? <strong>${recebeNome.lastIndexOf('a')}</strong> <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${recebeNome.slice(-3)}</strong> <br />`
document.body.innerHTML += `As palavras do seu nome são: <strong>${recebeNome.split(' ')}</strong> <br />`
document.body.innerHTML += `Seu nome com todas as letras maiúsculas: <strong>${recebeNome.toUpperCase()}</strong> <br />`
document.body.innerHTML += `Seu nome com todas as letras minúsculas: <strong>${recebeNome.toLowerCase()}</strong> <br />`



/*
Seu nome é: Flavio Ponciano ok
Seu nome tem ______ letras ok
A segunda letra do seu nome é: ______ ok
Qual o primeiro índice da letra LETRA no seu nome? ______ ok
Qual o último índice da letra LETRA no seu nome? ______ ok
As últimas 3 letras do seu nome são: ______ ok
As palavras do seu nome são: ______ ok
Seu nome com letras maiúsculas: ______ ok
Seu nome com letras minúsculas: ______ ok
*/