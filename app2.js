//Input de id e senha e erro se id = senha

let id = prompt('insira nome de usuario')
let senha = prompt('insira uma senha')

while (id == senha) {
    alert('Erro: senha nao pode ser igual ao nome de usuario')
    id = prompt('insira nome de usuario')
    senha = prompt('insira uma senha')
}

//Input de nome, idade, salario, genero e estado civil com validacao de acordo com regras definidas

const generos = ["f", "m", "x"]
const civis = ["s", "c", "v", "d"]

let nome = prompt('Digite o nome')
while (nome.length < 3){
    alert('Erro: nome precisa ter mais de 3 caracteres')
    nome = prompt('Digite o nome novamente')
}

let idade = Number(prompt('Digite a idade'))
while (idade < 0 || idade > 150 || isNaN(idade) == true){
    alert('Erro: idade precisa estar entre 0 e 150')
    idade = prompt('Digite a idade novamente')
}

let salario = Number(prompt('Digite o salario'))
while (salario <= 0 || isNaN(salario) == true){
    alert('Erro: salario precisa ser maior que 0')
    salario = prompt('Digite o salario novamente')
}

let genero = prompt('Digite o genero (f; m; x)')
while (generos.includes(genero) == false){
    alert('Erro: genero precisa ser f, m ou x')
    genero = prompt('Digite o genero novamente (f; m; x)')
}

let civil = prompt('Digite estado civil (s; c; v; d)')
while (civis.includes(civil) == false){
    alert('Erro: estado civil precisa ser s, c, v ou d')
    civil = prompt('Digite estado civil novamente (s; c; v; d)')
}

/* let test_nome = nome.length >= 3
let test_idade = idade >= 0 && idade <= 150
let test_salario = salario > 0 
let test_genero = generos.includes(genero)
let test_civil = civis.includes(civil)
 */
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Salario: ${salario}`)
console.log(`Genero: ${genero}`)
console.log(`Estado civil: ${civil}`)


//Input de dois numeros inteiros e contador de numeros entre eles

let a = Number(prompt('Digite o primeiro numero inteiro'))

while (Number.isInteger(a) == false || isNaN(a) == true){
    a = Number(prompt('O numero precisa ser inteiro'))
}

let b = Number(prompt('Digite o segundo número'))
while (Number.isInteger(b) == false || isNaN(b) == true){
    b = Number(prompt('O numero precisa ser inteiro'))
}

let min = Math.min(a, b)
let max = Math.max(a, b)

for (let i = min; i <= max; i++) {
    console.log(i)
    
}