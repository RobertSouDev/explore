// Manipulando Array

let techs = ["html", "css", "js"]
console.log(techs)
// adicionae um item no fim
techs.push("Node.js")
console.log(techs)

// adicionar no começo

techs.unshift("Sqn")
console.log(techs)

// remover do fim
// techs.pop()
// console.log(techs)

// remover do começo
// techs.shift(techs)
// console.log(techs)

// pegar somente alguns itens em qualquer posição do array
// console.log(techs.slice(1,3))

// remover 1 ou mais itens em qualquer posição do array
// techs.splice(1, 1)
// console.log(techs)

// encontrar a posição de um elemento no array

let index = techs.indexOf('css')

console.log(index)