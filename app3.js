/* let array = []

for (let index = 0; index < 5; index++) {
    array[index] = prompt("digite um número")
    
}
console.log(array)
console.log(array.slice(0,3))
array.length = 3
console.log(array)

let nome = 'pizza'
let preco = 3.14
let qtd = 2
let total = preco*qtd

let produto = [
    nome,
    preco,
    qtd,
    total
]

console.log(produto)
console.log(produto.slice(0,3)) */

let produto = {
    /* nome,
    quantidade,
    valor */
}

let carrinho = []

let resposta = 's'
let i = 0

while (resposta == 's'){
        let nome = prompt('Nome do produto')
        let quantidade = prompt('Quantidade de produtos')
        let valor = prompt('Valor do produto')
        produto.nome = nome
        produto.quantidade = quantidade
        produto.valor = valor
        carrinho[i] = produto
        resposta = prompt('Adicionar novos produtos? (s; n)')
        i++
}
console.log(carrinho[0])


function Qtd() {
    let TotalQtd = 0
    for (let i = 0; i < carrinho.length; i++) {
        TotalQtd += carrinho.produto[i].quantidade
        
    }
    return TotalQtd
}

function Preco() {
    let TotalPreco = 0
    for (let i = 0; i < carrinho.length; i++) {
        TotalPreco += (carrinho.produto[i].quantidade) * (carrinho.produto[i].valor)
        
    }
    return TotalPreco
}

console.log(Qtd())
console.log(Preco())