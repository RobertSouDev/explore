// Manipulando Array

// Transformar uma cadeia de caracteres em elementos de um array

let word = "Vamos ver se eu consigo fazer isso"

let newArray = word.split(" ")

console.log(newArray)

// ou dessa forma que eu não sabia

console.log(Array.from(word))
// dessa forma eu pego cada caractere e transformo em um elemento da lista nao cada palavra com usei a cima com split
