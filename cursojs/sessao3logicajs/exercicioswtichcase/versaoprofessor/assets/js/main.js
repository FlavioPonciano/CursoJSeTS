const h1 = document.querySelector(".container h1");
const data = new Date();
/*
const opcoes = {
  dateStyle: "full",
  timeStyle: "short",
};

h1.innerHTML = data.toLocaleDateString("pt-BR", opcoes); //Esse formato não está mais funcionando, verificar sempre o formato que está sendo utilizado
*/

//Forma simplificada
//h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())

//Outro modo de fazer a substituição dos dias e meses:

function getNomeMes (numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setemnbro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes]
}

function getDiaSemanaTexto (diaSemana) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
    return diasSemana[diaSemana]
}