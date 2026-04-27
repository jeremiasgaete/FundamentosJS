console.log("Conexión exitosa con js");

/*
=============================
¿Qué es una Condición en JS? 
=============================
Una condición nos permite tomar decisiones en el código. 
Separando dos caminos el si(if) y el no(else)

Estructura básica:( Sintáxis  --> reglas del lenguaje de programación)

if (condición){
    //código que se ejecuta si la condición es verdadera.
}
else (condición){
    //código que se ejecuta si la condición es falsa.
}
*/

//Ejemplo 1:(numérico) -- IF
let edad= 18;

if(edad <= 16){ //Condiciónsi
    console.log("Eres mayor de edad");
}

//Ejemplo 2:Dos caminos posibles
let temperatura= 10;

if(temperatura > 20){ //Condición SI
    console.log("Hace calor")
} else{ //Condición NO
    console.log("Hace frío")
}

//Ejemplo 3: IF - ELSE IF - ELSE (Multiples Condiciones)
let nota= 12.5;
if (nota >=6.0){ //Condición 1
    console.log("Excelente!");
} else if(nota >=4.0){ //Condición 2
    console.log("Aprobado");
} else{ //Condición 3(si no cumple anteriores)
    console.log("Reprobado");
}

//Ejemplo 4:Condicones con STRING
let nombre = "Jeremías";

//Comparación exacta===
if(nombre === "Andy"){
    console.log("Hola, " + nombre)
} else{
    console.log("Tú no eres Jeremías")
}

/*
OPERADORES DE COMPARACIÓN

> - mayor que
< - menor que
>= - mayor o igual
<= - menor o igual
=== - estricta igualdad 
!== - distinto estricto
== - igualdad
!= - distinto
*/ 

//Ejemplo de distinto
let num= 10;
let num2= 5;
if(num !== num2){
    console.log(`El número: ${num} es distinto que ${num2}`)
} else{
    console.log("Son iguales!")
}