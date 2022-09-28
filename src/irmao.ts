import { Familia } from "./familia";

export class Irmao extends Familia{
    constructor(
        nome: string,
        idade: number
    ){
        super(nome, idade)
    }

    verMembro(): void {
        console.log("Filho mais novo.")
    }
    verIdade():void{
        console.log("Não tenho direito a herança por enquanto, pois sou menor de idade.")
    }
}