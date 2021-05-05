

var foo = [ "a", "b", 3, "c", "No existe"];

 switch(foo[1]) {
     case "a":
     console.log('el caso es a');
     break;

     case "b":
     console.log("Se acaba de dar el caso  b sin frenos!");
     break;

     case "3":
     console.log('el caso b o 3 fue seleccionado');
     break;

     case "C":
     console.log('el caso solo funciona con C mayuscula');
     break;

     default:
         console.log('default no existe el caso que corresponda')
     break;
 }


 let a = 2;
 let b = 5;
 let result = 'Hola' ;

 if (a && 0) {
     result += " a and b es verdadero";

 } 
 
 result += " Vuelvo al programa global"

 console.log("Resultado: ", result);


 let obj_x = {
     nombre: "Pedro",
     edad: 18
 };

 let obj_y = {
     nombre: "Juan", 
     edad: 12
 };

 const mayor = (obj_x.edad > obj_y.edad) ? obj_y : obj_x;

 console.log("Resultado: nombre: ", mayor.nombre, "Edad: ", mayor.edad);





 let password = "";
 const secret = "12345678";
 let repetir = true;
 let intentos = 3;
 let mensaje = "Aceso denegado!";

 while (repetir && intentos > 0) {
     password = prompt (`Escribe el password tienes ${intentos} intentos: `); 

     if (password === secret) {
         repetir = !repetir
         mensaje = "Acceso denegado!"

         
     } else {
         console.log( "Vuelve a intentarlo");
         --intentos;
     }

}


alert( mensaje )


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = "Estos numeros son pares: "; 

for(let i = 0; i < numeros.length; ++i) {
    if (numeros[i] % 2 == 0) {
        result += `${numeros[i]} `; 
    }
}

console.log( result )



let a = 2;
let b = 5;
let result = 'Hola' ;

if (a && 0) {
    result += " a and 0 es verdadero"; 

} else if (a < b) {
    result += "a < b verdadero";

} else {
    result += "No se cumple el if ni el else"
}

console.log("Resultado: ", result);


let a = 10;

function sumar (b) {
    return a + b;
}

sumar(5)

let resta = function (a, b = 3) {
    return a - b;
}

resta (5)

const mult = (a, b = 2) => {
    return a*b
}

mult(3, 5)



function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num -1) + fibonacci(num -2);
    }
}

const fiboMain = (limit) => {
    for(let i = 0; i < limit; i++) {
        console.log(fibonacci (i)); 
    }
}

fiboMain (10)