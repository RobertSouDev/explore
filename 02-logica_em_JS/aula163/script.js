/*
    Solicitar o nome do aluno e as 3 notas 
    do bimestre calcular a media daquele aluno

    A media tem que ser maior que 6

    Se o aluno passou no bimestre, dar os
    Parabens.

    Se o aluno não passou,
    motivar o aluno a dar seu melhor na prova
    de recuperação.
    
    Em ambos os casos, mostre uma mensagem com o nome do aluno e nota
*/

let name = prompt("Qual o nome do(a) aluno(a)? ")

let n1 = prompt("Qual a nota da primeira prova? ")
let n2 = prompt("Qual a nota da segunda prova? ")
let n3 = prompt("Qual a nota da terceira prova? ")

let averege = (Number(n1) + Number(n2) +Number(n3)) /3

averege = averege.toFixed(2)

 if (averege > 6) {
    alert(name + " Sua media foi de: "+ averege +" muito top você conseguiu!!!")
}else {
    alert(name + " Sua média foi de "+ averege + " não foi dessa vez...mas na proxima e nossa")
}

