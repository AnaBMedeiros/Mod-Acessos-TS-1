//3. Crie a classe Pessoa, com os atributos: nome (privado), idade (privado), dataNascimento(privado) 
//(escolha os tipos apropriados para cada um. Pesquise o tipo Date de Typescript). Deve ter métodos 
//acessadores e modificadores;
//4. Faça a classe PessoaFisica, herdando de Pessoa, acrescentando cpf como atributo, e como modificador de 
//acesso ele não deveria ser alterado fora, nem dentro da própria classe (use a palavra chave get no método 
//    acessador);
//5. Faça a classe PessoaJuridica, herdando de Pessoa, acrescentando cnpj como atributo, e como modificador de 
//acesso ele não deveria ser alterado fora, nem dentro da própria classe (use a palavra chave get no método 
//    acessador);
//6. Altere o atributo nome da classe Pessoa para que seja possível ser alterado nas subclasses. Ao se criar 
//uma PessoaFisica e PessoaJuridica, concatene ao nome o sufixo " - Física" ou "- Jurídica", de acordo com o 
//caso;
//7. Altere o arquivo script.ts para criar um objeto tipo Pessoa, tipo PessoaFisica e tipo PessoaJuridica, 
//com valores que você quiser, e imprima no console cada atributo de cada objeto.

class Pessoa {

    protected nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor (nome: string, idade: number, dataNascimento: Date){
        this.nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }

    get Nome(): string {
        return this.nome;
    }

    get Idade(): number {
        return this._idade;
    }

    get DataNascimento(): Date {
        return this._dataNascimento;
    }

    set Nome(novoNome: string){
        this.nome = novoNome
    }

    set idade(novaIdade: number){
        this._idade = novaIdade;
    }

    set dataNascimento(novaDataNascimento: Date){
        this._dataNascimento = novaDataNascimento;
    }


}
