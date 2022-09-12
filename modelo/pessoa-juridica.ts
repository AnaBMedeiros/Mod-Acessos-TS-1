class PessoaJuridica extends Pessoa{

    readonly cnpj: number;

        constructor(nome:string, idade: number, dataNascimento: Date, cnpj: number ){
            super (nome, idade, dataNascimento);
            this.cnpj = cnpj;
        }

        get Cnpj(): number {
            return this.cnpj;
        }

}

