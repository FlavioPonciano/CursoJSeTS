//IF ELSE IF e ELSE

/*
Entre 0 - 11 = bom dia
Entre 12 - 17 = Boa tarde
Entre 18 - 23 = Boa noite
*/

const hora = 3

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia!"); // caso a condição seja falsa ele não vai disparar nada que esteja dentro do código
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde!");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite!");
} else {
    console.log('Horário inválido!')
}

//IF funciona sozinho
//Sempre que utilizo a palavra ELSE preciso de um IF antes
//Eu posso ter inumeros ELSE IFs na checagem
//Posso ter apenas um ELSE na checagem
//Podemos usar condições sem ELSE IF, utilizando apenas o IF e depois o ELSE ou somente o IF se for uma condição simples

const tenhoGrana = NaN

if (tenhoGrana) {
    console.log('Vou sair de casa hoje!') //contendo valor true eu consigo fazer o if
} else {
    console.log('Não vou sair de casa hoje!') //contendo o valor false eu façõ o else
}