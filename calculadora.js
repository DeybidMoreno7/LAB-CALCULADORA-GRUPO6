const prompt = require('prompt-sync')();

console.log("\x1b[1m%s\x1b[0m","BIENVENIDO A LA CALCULADORA DEL GRUPO #6");
let activo = true;

while(activo == true){
    let numero1 = Number(prompt("Digite número 1: "));
    let operacion = prompt("Digite operacion a realizar (+,-,*,/) : ");
    let numero2 = Number(prompt("Digite número 2: "));


    console.log(operacion);
    //console.log("La suma de",numero1,"+",numero2,"=",suma);

    /*while(operacion != "+" || operacion != "-" || operacion != "*" || operacion != "/" ){
        operacion = prompt("¡Operacion invalida! \n Digite nuevamente: ");
    }*/
    let resultado = 0;
    if(operacion === "+"){
        resultado = numero1 + numero2;
        console.log("La suma de",numero1,"+",numero2,"=",resultado)
    }else if(operacion === "-"){
        resultado = numero1 - numero2;
        console.log("La resta de",numero1,"-",numero2,"=",resultado)
    }else if(operacion === "*"){
        resultado = numero1 * numero2;
        console.log("El producto de",numero1,"*",numero2,"=",resultado)
    }else if(operacion === "/"){
        resultado = numero1 / numero2;
        console.log("El cociente de",numero1,"/",numero2,"=",resultado)
    }else{
        console.log("Operacion invalida");
    }   

    let continuidad = prompt("¿Desea continuar con otra operacion? S/N ") ;
    
    if(continuidad == "N" || continuidad == "n" ){
        console.log("\x1b[1m%s\x1b[0m","Gracias por usar la calculadora del grupo 6 :D")
        activo = false;
    }
    
}








