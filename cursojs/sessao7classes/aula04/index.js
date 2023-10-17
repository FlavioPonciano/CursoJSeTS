//Métodos de instância e estáticos
//São métodos que você pode acessar na classe sem instanciar a classe (sem utilizar a palavra "new")
//Eles não vão estar disponiveis dentro da instancia. Sao funções dentro somente da classe.

function teste() {
    console.log('Este é o meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        teste() //Posso chamar funções dentro do constructor
    }

    //Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    //Método de instância
    diminuirVolume() {
        this.volume -= 2
    }

    //Método estático (acessado somente pela classe)
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }

    //Método estático
    static soma(x, y) {
        return x + y
    }
}

const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
console.log(controle1)

ControleRemoto.trocaPilha() //Chamando aqui o método estático

console.log(ControleRemoto.soma(10, 5))