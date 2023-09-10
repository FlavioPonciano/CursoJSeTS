// Função que calcula o IMC e exibe o resultado
function calcularIMC(event) {
    event.preventDefault(); // Evita o comportamento padrão do envio do formulário

    // Obtém os valores de peso e altura dos campos de entrada
    const recebePeso = parseFloat(document.querySelector("#recebePeso").value);
    const recebeAltura = parseFloat(document.querySelector("#recebeAltura").value);
    
    // Seleciona o elemento de resultado
    const resultado = document.querySelector("#resultado");

    // Verifica se os valores inseridos são válidos
    if (isNaN(recebePeso) || isNaN(recebeAltura)) {
        // Exibe uma mensagem de erro se os valores não forem válidos
        resultado.style.background = 'white';
        resultado.innerHTML = 'Por favor, preencha ambos os campos com valores válidos.';
        return;
    }

    // Calcula o IMC
    const calculoDoImc = recebePeso / (recebeAltura * recebeAltura);

    // Objeto que mapeia os níveis de IMC para intervalos e cores
    const niveisDeIMC = {
        'Abaixo do peso': [0, 18.49, 'yellow'],
        'Peso Normal': [18.5, 24.9, 'green'],
        'Sobrepeso': [25, 29.9, 'yellow'],
        'Obesidade grau 1': [30, 34.9, 'red'],
        'Obesidade grau 2': [35, 39.9, 'red'],
        'Obesidade grau 3': [40, Infinity, 'red'],
    };

    // Inicializa o nível de IMC como "Desconhecido" e o fundo como branco
    let nivel = 'Desconhecido';
    let background = 'white';

    // Itera pelo objeto de níveis de IMC para determinar o nível com base no valor calculado
    for (const key in niveisDeIMC) {
        const [min, max, cor] = niveisDeIMC[key];
        if (calculoDoImc >= min && calculoDoImc <= max) {
            nivel = key;
            background = cor;
            break;
        }
    }

    // Define o estilo de fundo e exibe a mensagem do IMC calculado
    resultado.style.background = background;
    resultado.innerHTML = `O seu IMC é de ${calculoDoImc.toFixed(2)} (${nivel})`;
}

// Adiciona um ouvinte de evento ao botão "Calcular"
const calcularButton = document.getElementById('calcularButton');
calcularButton.addEventListener('click', calcularIMC);
