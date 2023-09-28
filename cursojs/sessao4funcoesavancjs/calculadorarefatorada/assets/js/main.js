// Definição da função construtora Calculadora
function Calculadora() {

    // Seleciona o elemento HTML com a classe 'display' e atribui à propriedade display da instância
    this.display = document.querySelector('.display');
    
    // Inicia a calculadora, adicionando os listeners de clique e tecla Enter
    this.iniciar = () => {
        this.capturaClique();
        this.capturaEnter();
    }

    // Adiciona listener para a tecla Enter
    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta(); // Chama a função para realizar a conta ao pressionar Enter
            }
        });
    }

    // Adiciona listener para cliques nos botões da calculadora
    this.capturaClique = () => {
        document.addEventListener('click', event => {
            const elemento = event.target;
            // Adiciona número ao display se o elemento clicado tem a classe 'btn-num'
            if(elemento.classList.contains('btn-num')) this.addNumDisplay(elemento);
            // Limpa o display se o elemento clicado tem a classe 'btn-clear'
            if(elemento.classList.contains('btn-clear')) this.clear();
            // Remove o último caractere do display se o elemento clicado tem a classe 'btn-del'
            if(elemento.classList.contains('btn-del')) this.del();
            // Realiza a conta se o elemento clicado tem a classe 'btn-eq'
            if(elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    // Adiciona o número do botão clicado ao display
    this.addNumDisplay = elemento => {
        this.display.value += elemento.innerText;
        this.display.focus(); // Mantém o foco no display para que a captura do Enter funcione
    }

    // Limpa o conteúdo do display
    this.clear = () => this.display.value = '';

    // Remove o último caractere do conteúdo do display
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    // Realiza a conta matemática e exibe o resultado no display
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida.'); // Exibe alerta se a conta é inválida
                return;
            }
            
            this.display.value = conta; // Exibe o resultado da conta no display
        } catch(e) {
            alert('Conta inválida.'); // Exibe alerta se ocorrer um erro ao avaliar a conta
            return;
        }
    }
}

// Cria uma instância da Calculadora e inicia
const calculadora = new Calculadora();
calculadora.iniciar();
