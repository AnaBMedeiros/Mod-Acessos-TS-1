const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const p1 = new Pessoa ('Andrew', 18, new Date(10,0o7,2002))
console.log('Nome:' + p1.Nome)

const pf1 = new PessoaFisica ('Ana', 20, new Date(15,0o7,2002), 11111111111)
console.log('Pessoa Física:' + pf1.Nome)

const pj1 = new PessoaJuridica ('Pedro', 18, new Date(10,0o7,2002), 33333333333)
console.log('Pessoa Jurídica:' + pj1.Nome)


// const repContas = new RepositorioContas();
//
// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');
//
// repContas.adicionar(c1);
// repContas.adicionar(c2);
//
// repContas.getContas().forEach(conta => console.log(conta.numero))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
