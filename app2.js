//Input de id e senha e erro se id = senha

let id = prompt('insira nome de usuario')
let senha = prompt('insira uma senha')

for(; id == senha; ) {
    alert('Erro: senha nao pode ser igual ao nome de usuario')
    id = prompt('insira nome de usuario')
    senha = prompt('insira uma senha')
}

//Input de nome, idade, salario, genero e estado civil com validacao de acordo com regras definidas

const generos = ["f", "m", "x"]
const civis = ["s", "c", "v", "d"]

let nome = prompt('Digite o nome')
let idade = prompt('Digite a idade')
let salario = prompt('Digite o salario')
let genero = prompt('Digite o genero (f; m; x)')
let civil = prompt('Digite estado civil (s; c; v; d)')

let test_nome = nome.length >= 3
let test_idade = idade >= 0 && idade <= 150
let test_salario = salario > 0 
let test_genero = generos.includes(genero)
let test_civil = civis.includes(civil)

console.log(`Nome maior que 3 caracteres: ${test_nome}; input: ${nome}`)
console.log(`Idade entre 0 e 150: ${test_idade}; input: ${idade}`)
console.log(`Salario maior que 0: ${test_salario}; input: ${salario}`)
console.log(`Genero valido: ${test_genero}; input: ${genero}`)
console.log(`Estado civil valido: ${test_salario}; input ${civil}`)


//Input de dois numeros inteiros e contador de numeros entre eles

let a = Number(prompt('Digite o primeiro numero inteiro'))

for (; Number.isInteger(a) == false;){
    a = Number(prompt('O numero precisa ser inteiro'))
}

let b = Number(prompt('Digite o segundo número'))
for (; Number.isInteger(b) == false;){
    b = Number(prompt('O numero precisa ser inteiro'))
}

let min = Math.min(a, b)
let max = Math.max(a, b)

for (let i = min; i <= max; i++) {
    console.log(i)
    
}