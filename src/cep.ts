
import {ViaCep} from "./viacep.ts";

class Cep {

    viacep: ViaCep;

    constructor() {
        this.viacep = new ViaCep();
    }

    async find(cep: string) {
        return this.viacep.find(cep);
    }

}

export {Cep};