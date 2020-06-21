
class ViaCep {

    url: string;

    constructor() {
        this.url = `https://viacep.com.br/`
    }

    async find(cep: string) {

        const url = `${this.url}/ws/${cep}/json`;

        try {

            let response = await fetch(url);

            if (!response.ok) {
                return Error(`Erro ao busca o cep.`);
            }

            let content = await response.json();

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
            console.log(err.stack);
            throw err;
        }

        return null;
    }

}

export {ViaCep};