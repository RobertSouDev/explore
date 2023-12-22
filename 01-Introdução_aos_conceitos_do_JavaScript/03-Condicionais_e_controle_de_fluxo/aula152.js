// switch

let expression = 'a'

switch (expression){
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        //codigo
        console.log('b')
        break
    case 'c':
        //codigo
        console.log('c')
        break
    default:
        console.log('Quando não é nem uma das opções')
        break
}

function calculate(number1, operator, number2){
    let result

    switch (operator){
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break   
        default:
            console.log('Não implementado')
            break
    }
     
    return result
}

console.log(calculate(4, '+', 8))