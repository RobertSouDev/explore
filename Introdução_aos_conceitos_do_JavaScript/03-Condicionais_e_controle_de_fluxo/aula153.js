// throw
 function sayMyNAme(name = '') {
    if (name === ''){
        throw new Error("Nome é necessário")
    }

    console.log(name)
 }

//try...catch

try{
    sayMyNAme()
} catch(e){
    console.log(e)
} // é uma maneira de fica capturando erros

console.log('Apos o erro')