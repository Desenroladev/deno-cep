
import { Cep } from "../src/cep.ts";


const cep = new Cep();

cep.find(`62840000`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
