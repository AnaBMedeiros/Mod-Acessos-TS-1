class PessoaFisica extends Pessoa{

        readonly cpf: number;

        constructor(nome:string, idade: number, dataNascimento: Date, cpf: number ){
            super (nome, idade, dataNascimento);
            this.cpf = cpf;
        }

        get Cpf(): number {
            return this.cpf;
        }

}