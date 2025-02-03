/*
04 - Crie um programa que verifique se um numero está entre 50 e 100 e imprima
na tela uma mensagwm informando se está na faixa de valores solicitada*/


let numeroASerValido = 35;

if (numeroASerValido>=50 && numeroASerValido<=100){
    console.log("O numero ", numeroASerValido, " está entre 50 e 100")

} else{
    console.log("O numero ", numeroASerValido, "não está entre 50 e 100")
}

/*Operador Ternário*/
console.log("Usando o operador ternário do JavaScript")
numeroASerValido>=50 && numeroASerValido<=100 
    ? console.log("O numero ", numeroASerValido, " está entre 50 e 100")
    :console.log("O numero ", numeroASerValido, "não está entre 50 e 100")
