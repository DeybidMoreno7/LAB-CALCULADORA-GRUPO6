const prompt = require('prompt-sync')();

console.log("\x1b[1m%s\x1b[0m","BIENVENIDO A LA CALCULADORA DEL GRUPO #6");
let activo = true;
let numero1;
let numero2;
let operacion;
let contador = 0;
while(activo == true){
    
    let bandera = true;

    while(bandera == true){
        numero1 = Number(prompt("Digite número 1: "));
        operacion = prompt("Digite operacion a realizar (+,-,*,/) : ");
        numero2 = Number(prompt("Digite número 2: "));
        if(!Number.isNaN(numero1) && !Number.isNaN(numero2)){ // VALIDACION DE QUE AMBOS SON NUMEROS
            bandera = false;
        }else{
            console.log("Marcación errada");
        }
    }


    //console.log(operacion);
    //console.log("La suma de",numero1,"+",numero2,"=",suma);

    /*while(operacion != "+" || operacion != "-" || operacion != "*" || operacion != "/" ){
        operacion = prompt("¡Operacion invalida! \n Digite nuevamente: ");
    }*/
    let resultado = 0;
    if(operacion === "+"){
        resultado = numero1 + numero2;
        console.log("La suma de",numero1,"+",numero2,"=",resultado)
    }else if(operacion === "-"){                
        if(numero1 < numero2){
            let confirmacionResta = prompt("El número 1 es menor al número 2, ¿Desea continuar con la resta? S/N: ");
            if(confirmacionResta === "S" || confirmacionResta === "s"){
                resultado = numero1 - numero2;
                console.log("La resta de",numero1,"-",numero2,"=",resultado)
            }            
        }else{
        resultado = numero1 - numero2;
        console.log("La resta de",numero1,"-",numero2,"=",resultado)
        }        
    }else if(operacion === "*"){
        resultado = numero1 * numero2;
        console.log("El producto de",numero1,"*",numero2,"=",resultado)
    }else if(operacion === "/"){
        if(numero2 == 0){
            console.log("¡No puedes dividir entre 0!");
        }else{
            resultado = numero1 / numero2;
            console.log("El cociente de",numero1,"/",numero2,"=",resultado)
        } 
    }else{
        console.log("Operacion invalida");
    }   
    contador = contador + 1 ;
    let continuidad = prompt("¿Desea continuar con otra operacion? S/N ") ;
    
    if(continuidad == "N" || continuidad == "n" ){
        console.log("Ha realizado",contador,"operaciones :D");
        console.log("\x1b[1m%s\x1b[0m","Gracias por usar la calculadora del grupo 6 :D")
        activo = false;
    }    
}








