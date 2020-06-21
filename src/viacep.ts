
class ViaCep {

    url: string;

    constructor() {
        this.url = `https://viacep.com.br/`
    }

    async find(cep: string | number) {

        const url = `${this.url}/ws/${cep}/json`;

        try {

            let response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Ops, não foi possivel se conectar ao ViaCep.`);
            }

            let content = await response.json();

            if(content.erro) {
                throw new Error(`Ops, CEP não localizado no ViaCep`);
            }

            content.cep = content.cep.replace('-', '');
            if(content.gia == '') {
                content.gia = null;
            }
            if(content.unidade == '') {
                content.unidade = null;
            }
            if(content.ibge == '') {
                content.ibge = null;
            }
            if(content.logradouro == '') {
                content.logradouro = null;
            }
            if(content.complemento == '') {
                content.complemento = null;
            }
            if(content.bairro == '') {
                content.bairro = null;
            }
            return content;

        } catch (err) {
            throw err;
        }

        return null;
    }

}

export {ViaCep};