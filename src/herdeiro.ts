import { Familia } from "./familia"

export class Herdeiro extends Familia{
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
    }

    verMembro():void{
        console.log(`As informações do herdeiro são:
        O meu nome é: ${this.nome}
        A minha idade é: ${this.idade}`)
    }
    verHerdeiro(): void {
        console.log("E sou o herdeiro")
    }
}