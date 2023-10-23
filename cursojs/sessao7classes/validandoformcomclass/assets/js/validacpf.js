//Validando CPF utilizando Class
//705.484.450-52 ou 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    //Verificando se é uma sequência de números repitidos:
    éSequência() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo //Vai repetir o primeiro caractere do cpfLimpo pelo tamanho da string ou colocar só repeat(11) e verificar se ele é igual ao cpfLimpo inicial, se ele for ele vai retornar true e lá no valida se ele for true, vai retornar false
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2) //Tirando os ultimos dois digitos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos) //como estou utilizando um método estático preciso chamar ele utilizar o nome da classe ao invés do this.
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1 //Determinando o reverso que vai fazer a multipliacação sendo o tamanho dele o tamanho do cpfSemDigito +1 pois precisa começar em 10 e terminar em 2

        for (let stringNumerica of cpfSemDigitos) {
            //console.log((stringNumerica, reverso))
            total += reverso * Number(stringNumerica)
            reverso--
        }

        const digito = 11 - (total % 11)
        return digito  <= 9 ? String(digito) : '0'
    }

    //Fazendo as validações:
    valida() {
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if(this.éSequência()) return false
        this.geraNovoCpf()

        return this.novoCPF === this.cpfLimpo
    }
}

/*
let validacpf = new ValidaCPF('070.987.720-03')

if (validacpf.valida()) {
    console.log('CPF válido.')
} else {
    console.log('CPF inválido.')
}
*/