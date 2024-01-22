class heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = atacar(tipo);


        function atacar (tipo){
            if ( tipo == "mago"){
                return "Usou magia";
            }
            if ( tipo == "guerreiro"){
                return "usou espada";
            }
            if ( tipo == "monge"){
                return "usou artes marcias";
            }
            if ( tipo == "ninja"){
                return "usou shuriken"
            }
        }
    }
}

let heroi_1 = new heroi ("Francisco", 31, "mago");
let heroi_2 = new heroi ("Pedro ", 29 , "guerreiro");

    console.log( "O " + heroi_1.tipo  + "  " + heroi_1.ataque);
    console.log( "O " + heroi_2.tipo  + "  " + heroi_2.ataque);

    


