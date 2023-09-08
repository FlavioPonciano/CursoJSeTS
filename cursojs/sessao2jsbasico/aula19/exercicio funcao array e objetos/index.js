function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobrenome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    /*
    Ao invés de criar uma function para criar o objeto, pode ser adicionado de forma mais direta:
    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    })
    o atributo .value seria adicionado se não tivesse sido feito ao chamar os valores na parte de cima
    */
    function criaPessoas(nome, sobrenome, peso, altura) {
      return {
        nome,
        sobrenome,
        peso,
        altura,
      };
    }
    const pessoa = criaPessoas(nome, sobrenome, peso, altura);
    pessoas.push(pessoa);

    resultado.innerHTML += `
            Nome: ${pessoa.nome}<br>
            Sobrenome: ${pessoa.sobrenome}<br>
            Peso: ${pessoa.peso}<br>
            Altura: ${pessoa.altura}<br>
        `;

    console.log(pessoas);
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
