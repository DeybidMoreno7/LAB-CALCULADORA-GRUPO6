const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite número 1: "));
let numero2 = Number(prompt("Digite número 2: "));


if(!Number.isNaN(numero1) && !Number.isNaN(numero2) ){
    console.log("Son numeros");
}else{
    console.log("awo");
}



