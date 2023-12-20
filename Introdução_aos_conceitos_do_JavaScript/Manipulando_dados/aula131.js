// Manipulação Strings

// Verificar se o texto contém a palavra Amor

let teste = "Eu quero ver se tem..."

console.log(teste.includes("amor"))

let new_teste = "Eu quero ver se tem...amor"

console.log(new_teste.includes("amor"))

let teste2 = new_teste.includes("amor")

if (teste2 == true){
    console.log("Sim, tem  a palavra")
}else {
    console.log("Não, tem a palavra")
}
