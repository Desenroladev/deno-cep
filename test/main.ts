
import { Cep } from "../src/cep.ts";


const cep = new Cep();

cep.find('60720000')
    .then(res => console.log(res))
    .catch(err => console.log(err));
