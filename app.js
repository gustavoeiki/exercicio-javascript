//contador de numeros pares entre 0 e 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    } 
}

//contador de numeros impares entre 0 e 100
for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    } 
}

//contador de numeros entre 0 e input
let input = prompt("Digite um numero maior que 1")
for (let i = 0; i <= input; i++) {
    console.log(i)
    
}

//contador de numeros divisiveis por 5 entre 0 e input
for (let i = 0; i <= input; i++) {
    if (i % 5 == 0) {
        console.log(i)
    }
    
}


//validor de nota entre 0 e 10
let nota = prompt("Digite uma nota entre 0-10")
while (nota < 0 || nota > 10) {
    alert('Nota invalida')
    nota = prompt("Digite uma nota entre 0-10")
    
}