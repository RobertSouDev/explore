/*
     typer conversion (Typecasting) vs Type coersion
*/

console.log(Number('9') + 5)

/*  FALSY
    Quando um valor é considerado false em 
    contexto onde booleano é obrigatório 
    ( Condicionais e loops )

    false
    0
    -0 
    ""
    null
    undefined
    NaN
*/

console.log( true ? 'verdadeiro': 'Falso')

/*
     Truthy
     Quando um valor é considerado True em contextos
     onde um booleano é obrigatorio ( condicionais e loops)

     true
     {}
     []
     1
     2.23
     "0"
     "false"
     -1
     Infinity
     -Infinity
*/

console.log(NaN? "verdadeiro": 'Falso')


