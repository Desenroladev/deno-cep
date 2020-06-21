
import {ViaCep} from "./viacep.ts";

class Cep {

    viacep: ViaCep;

    constructor() {
        this.viacep = new ViaCep();
    }

    async find(cep: string | number) {

        const aux = typeof cep;

        if (aux !== 'number' && aux !== 'string') {
            throw new Error(`Ops, somente é suportado CEP no formato de número ou string`);
        }

        if((''+cep).length != 8) {
            throw new Error(`Ops, Um CEP tem no máximo 8 caracteres.`);
        }

        return this.viacep.find(cep);
    }

}

export {Cep};