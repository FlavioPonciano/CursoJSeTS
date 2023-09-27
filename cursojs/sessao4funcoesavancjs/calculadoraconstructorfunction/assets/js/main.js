function CriaCalculadora () {

        this.display = document.querySelector('.display')

        this.inicia = function() { //esse método é o que vai desencadear toda a função então ele já fica sendo chamado no calculadora.inicia()
            this.cliqueBotoes()
            this.pressionaEnter()
        }

        this.pressionaEnter = function() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        }

        this.realizaConta = function () {
            //eval() - tenta executar como js um string, mas é perigoso pois qualquer js pode ser executado pelo usuário
            let conta = this.display.value

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta
            } catch(e) {
                alert('Conta inválida')
                return
            }
        }


        this.clearDisplay = function() {
            this.display.value = ' '
        }


        this.apagaUm = function() {
            this.display.value = this.display.value.slice(0, -1) //Fazendo um slice informando onde 0 é o tamanho da string -1 casa
        }



        this.cliqueBotoes = function() {
            document.addEventListener('click', (e) => { //Usando a arrow function para chamar a calculadora, sendo trocado o documento
                const el = e.target

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText)
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

                this.display.focus();
            }) //}.bind(this)) dizendo para utilizar o this da calculadora caso não seja utilizado uma arrow function
        }

        this.btnParaDisplay = function(valor) {
            this.display.value += valor
        }


}

const calculadora = new CriaCalculadora()
calculadora.inicia()