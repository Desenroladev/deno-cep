
<h1 align="center">Deno CEP</h1>

<p align="center">
    Busca por CEP integrado diretamente ao serviço do ViaCEP (Deno)
</p>

## Features

 * Busca em tempo-real diretamente ao serviço do ViaCEP.
 * Sem limites consultas de CEP conhecidas.
 * Suporte ao Deno `1.1.1`.
 * Desenvolvido utilizando TypeScript.



### Consultando um CEP

``` ts
import { Cep } from 'https://deno.land/x/cep/mod.ts'

const cep = new Cep();

cep.find('60720000')
  .then(res => console.log(res))
  .catch(err => console.log(err));
```
#### Resposta
```yaml
{
  cep: "60720000",
  logradouro: "Avenida General Osório de Paiva",
  complemento: "até 1672 - lado par",
  bairro: "Parangaba",
  localidade: "Fortaleza",
  uf: "CE",
  unidade: null,
  ibge: "2304400",
  gia: null
}
```

### CEP não localizado

``` ts
import { Cep } from 'https://deno.land/x/cep/mod.ts'

const cep = new Cep();

cep.find('00000000')
  .catch(err => console.log(err));
```
#### Resposta
```yaml
{

}
```

### CEP no formato inválido

``` ts
import { Cep } from 'https://deno.land/x/cep/mod.ts'

const cep = new Cep();

cep.find('00.000-000')
  .catch(err => console.log(err));
```
#### Resposta
```yaml
{

}
```

## Autor
[<img src="https://avatars0.githubusercontent.com/u/20977759?s=96&v=4"><br><sub>@antonielliimma</sub>](https://github.com/antonielliimma) 
