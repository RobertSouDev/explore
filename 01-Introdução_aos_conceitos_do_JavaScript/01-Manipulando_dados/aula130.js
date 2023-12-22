// manipulaçaõ Strings e Array


// Separe um texto que contem espaços, em novo array onde cada texto é uma posiçao do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let textoo = "Eu quero viver o Amor!"

let myArray = textoo.split(" ")

console.log(myArray)

let novoTexto = myArray.join("_")
console.log(novoTexto)