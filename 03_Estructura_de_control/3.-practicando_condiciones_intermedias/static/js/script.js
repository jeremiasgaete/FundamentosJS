console.log("Conexión exitosa con js");

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nombre = "Jeremy";
    let nota = 6.2;
    if (nota >= 6.0) {
        alert(`El estudiante ${nombre} tiene nota ${nota} y su resultado es: Excelente rendimiento`);
    } else {
        alert("Otro resultado");
    }
}



// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "Daniel Pérez";
    let nombreMayus = nombre.toUpperCase();
    let cantidad = nombreMayus.length;
    alert(`El nombre convertido es: ${nombreMayus} y tiene ${cantidad} caracteres`);
}

// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "pepito@gmail.com";
    if (correo.includes("@") & correo.includes(".")) {
        alert(`El correo convertido es: ${correo} y el resultado es: correo válido`);
    } else {
        alert(`El correo convertido es: ${correo} y el resultado es: correo inválido`);
    }
}



// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";
    let cantidad = frase.length;
    if (cantidad > 20) {
        alert(`La frase "${frase}" tiene ${cantidad} caracteres y corresponde a una frase larga`);
    } else {
        alert(`La frase "${frase}" tiene ${cantidad} caracteres y corresponde a una frase corta`);
    }
}


// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "teclado";
    let precio = 50000;
    let descuento = 0.1;
    let precioFinal = precio - (precio * descuento);
    alert(`El producto ${producto.toUpperCase()} tiene un precio final de $${precioFinal}`);
}

//Ejercicio 16: Boleta de compra con clasificación de cliente

//Crear una función que almacene el nombre de un cliente, el nombre de un producto y el precio. Luego:
//Convertir el nombre del cliente a mayúsculas
//Determinar el tipo de cliente según el precio:
//Mayor o igual a 100.000 → Cliente Premium (20% descuento)
//Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
//Menor a 50.000 → Cliente Normal (sin descuento)
//Mostrar:
//Nombre del cliente en mayúsculas
//Producto en minúsculas
//Precio original
//Precio final
//Tipo de cliente

function ejercicio16() {
    let cliente = "jeremy";
    let produ = "producto";
    let precio1 = "45000";
    let precio2 = "80000";
    let clientemayu = cliente.toUpperCase();
    let produminus = produ.toLowerCase();
    if(precio1 + precio2 >= 100000){
        alert(`¡Felicidades ${clientemayu}! has conseguido un descuento del 20% por tu compra que supera los 100.000 pesos y eres reconocido como un cliente premium!`)
    } else if (precio1 + precio2 >= 50000){
        alert(`¡`)
    }
}

//Ejercicio 17: Análisis de frase con puntuación
//Crear una función que almacene una frase y un puntaje numérico. Luego:
//Convertir la frase a minúsculas
//Contar la cantidad de caracteres
//Clasificar el puntaje:
//90 o más → Excelente
//70 o más → Bueno
//Menor a 70 → Insuficiente
//Mostrar:
//Frase transformada
//Largo de la frase
//Puntaje
//Clasificación

function ejercicio17() {

}

//Ejercicio 18: Evaluación de tres notas con estado final
//Crear una función que almacene el nombre de un estudiante y tres notas. Luego:
//Calcular el promedio
//Convertir el nombre a mayúsculas
//Determinar el estado:
//Promedio ≥ 6.0 → Destacado
//Promedio ≥ 4.0 → Aprobado
//Promedio < 4.0 → Reprobado

function ejercicio18() {
    let nome = "Jeremias";
    let n1 = 2.9;
    let n2 = 7.0;
    let n3 = 5.7;
    let promedio = (n1 + n2 + n3) / 3;
    let nombremayus = nome.toUpperCase();
    if (promedio >= 6) {
        alert(`El estudiante ${nombremayus} esta Destacado
            \nPromedio: ${promedio}.
            \nLargo nombre: ${nome.length}.`)
    } else if (promedio >= 4) {
        alert(`El estudiante ${nombremayus} esta Aprobado
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre.lenght}.`)
    } else if (nota >= 3.0) {
        alert(`El estudiante ${nombremayus} esta Reprobado
    \nPromedio: ${promedio}.
    \nLargo nombre: ${nome.length}`)
    }
}

//Ejercicio 19: Clasificación de desempeño con más niveles
//Crear una función que almacene el nombre de un estudiante y su promedio final. Luego:

//Convertir el nombre a mayúsculas
//Clasificar el rendimiento según:
//≥ 6.5 → Sobresaliente
//≥ 6.0 → Muy buen rendimiento
//≥ 5.0 → Buen rendimiento
//≥ 4.0 → Suficiente
//< 4.0 → Insuficiente
//Además:
//Mostrar la cantidad de caracteres del nombre

function ejercicio19() {

}

//Ejercicio 20: Clasificación de producto con múltiples rangos de precio
//Crear una función que almacene el nombre de un producto y su precio. Luego:
//Convertir el producto a minúsculas
//Clasificar el precio:
//≥ 200.000 → Producto de lujo
//≥ 100.000 → Producto premium
//≥ 50.000 → Producto estándar
//≥ 20.000 → Producto económico
//< 20.000 → Producto básico

function ejercicio20() {
    let product1 = "Anillo - 80000CLP";
    let product2 = "Cartera - 65000CLP";
    let product3 = "Gorra - 700CLP";
    let pm1 = product1.toLowerCase();
    let pm2 = product2.toLowerCase();
    let pm3 = product3.toLowerCase();
    if (product){

    }
}