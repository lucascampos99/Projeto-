import { Herdeiro } from "./src/herdeiro" 
import { Irmao } from "./src/irmao"
import { Cachorro } from "./src/cachorro"

let membroUm = new Herdeiro("Lucas", 23)
let membroDois = new Irmao("Pedro", 7)
let animal = new Cachorro("Zezé", 5)


membroUm.verMembro();
membroUm.verHerdeiro();
membroDois.verMembro();
membroDois.verIdade();
animal.verMembro();
animal.som();
