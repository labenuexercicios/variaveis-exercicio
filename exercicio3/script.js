const nomeDoCandidato = prompt("Qual é o seu nome?")
const dataDeNascimentoDoCandidato = prompt("Qual é a sua data de nascimento? Utilize as /")
let enderecoDoCandidato = prompt("Qual é o seu endereço?")
const cpfDoCandidato = prompt("Qual é o seu CPF?")
let escolaridadeDoCandidato = prompt("Qual é o seu grau de escolaridade?")
let habilitacaoDoCandidato = prompt("Você possui CNH?")
let filhosDoCandidato = prompt("Quantos filhos você tem?")
let cargoDoCandidato = prompt("Qual seu cargo atual?")
let salarioDoCandidato = prompt("Qual seu sálario atual?")
let comissaoDoCandidato = prompt("Você recebe comissão? Se sim, informe a porcentagem, caso não, responda com zero")
const anoDeAdmissaoDoCandidato = prompt("Quando você foi admitido?")

const numeroDoCpf = Number(cpfDoCandidato)
let cnh = Boolean(habilitacaoDoCandidato)
let numeroDeFilhos = Number(filhosDoCandidato)
let salario = Number(salarioDoCandidato)
let comissao = Number(comissaoDoCandidato)

console.log("A variavel nomeDoCandidato é do tipo", typeof nomeDoCandidato)
console.log("A variavel dataDeNascimentoDoCandidato é do tipo", typeof dataDeNascimentoDoCandidato)
console.log("A variavel enderecoDoCandidato é do tipo", typeof enderecoDoCandidato)
console.log("A variavel cpfDoCandidato é do tipo", typeof numeroDoCpf)
console.log("A variavel escolaridadeDoCandidato é do tipo", typeof escolaridadeDoCandidato)
console.log("A variavel habilitacaoDoCandidato é do tipo", typeof cnh)
console.log("A variavel filhosDoCandidato é do tipo", typeof numeroDeFilhos)
console.log("A variavel cargoDoCandidato é do tipo", typeof cargoDoCandidato)
console.log("A variavel salarioDoCandidato é do tipo", typeof salario)
console.log("A variavel comissaoDoCandidato é do tipo", typeof comissao)
console.log("A variavel anoDeAdmissaoDoCandidato é do tipo", typeof anoDeAdmissaoDoCandidato)

console.log("Nome:", nomeDoCandidato)
console.log("Data de nascimento:", dataDeNascimentoDoCandidato)
console.log("Endereço:", enderecoDoCandidato)
console.log("CPF", cpfDoCandidato)
console.log("Grau de escolaridade:", escolaridadeDoCandidato)
console.log("Possui habilitação?", habilitacaoDoCandidato)
console.log("Quantos filhos você tem?", filhosDoCandidato)
console.log("Qual seu cargo atual?", cargoDoCandidato)
console.log("Qual seu salario atual?", salarioDoCandidato)
console.log("Você recebe comissão?", comissaoDoCandidato)
console.log("Quando você foi admitido?", anoDeAdmissaoDoCandidato)
