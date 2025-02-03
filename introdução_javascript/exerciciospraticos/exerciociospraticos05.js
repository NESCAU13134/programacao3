/* Crie um programa, que baseado */


const DOMINGO       =0;
const SEGUNDA_FEIRA =1;
const TERCA_FEIRA   =2;
const QUARTA_FEIRA  =3;
const QUINTA_FEIRA  =4;
const SEXTA         =5;
const SABADO        =6;

//Date().getDay(). retorna um número inteiro do tipo Number,
//Onde 0 = domingo e o 6 = sabado
let diaDaSemana = new Date().getDay();

switch(diaDaSemana){
    case DOMINGO:
        console.log("Hoje é domindo");
        break;
    case SEGUNDA_FEIRA:
        console.log("Hoje é segunda");
        break;
    case TERCA_FEIRA:
        console.log("Hoje é terça");
        break;
    case QUARTA_FEIRA:
        console.log("Hoje é quarta");
        break;
    case QUINTA_FEIRA:
        console.log("Hoje é quinta");
        break;
    case SEXTA:
        console.log("Hoje é sexta");
        break;
    case SABADO:
        console.log("Hoje é sábado");
        break;

}