console.log("Conexión correcta con js..");

// 1️⃣ Presentación completa
// Crea las variables:
// nombre: Camila
// edad: 25
// Debes mostrar un mensaje que:
// Presente a la persona
// Indique su edad
// Indique el tipo de dato de edad
// 👉 Todo en un solo mensaje.

let nombre = "Camila";
let edad = "25";
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años. \n Tipo de dato (edad) es: ${typeof edad}`);


// 2️⃣ Ubicación con transformación
// Crea las variables:
// comuna: Maipú
// region: Metropolitana
// Debes mostrar un mensaje que:
// Indique dónde vive la persona
// Muestre la comuna en MAYÚSCULAS
// Muestre la región en minúsculas

let comuna = "Maipú";
let region = "Metropolitana";
console.log(`La persona vive ${comuna.toLocaleUpperCase()} de la region ${region.toLowerCase()}`);


// 3️⃣ Análisis de palabra
// Crea la variable:
// lenguaje: Python
// Debes mostrar un mensaje que:
// Indique cuántos caracteres tiene
// Muestre la palabra en MAYÚSCULAS
// Indique el tipo de dato
let lenguaje = "Python";
console.log(`La palabra ${lenguaje.toUpperCase()} tiene ${lenguaje.length} letras.`);


// 4️⃣ Frase completa analizada
// Crea la variable:
// mensaje: Me encanta programar en JavaScript
// Debes mostrar un mensaje que:
// Indique la cantidad de caracteres
// Verifique si contiene la palabra "JavaScript"
// Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`La palabra ${mensaje.toLowerCase()} tiene ${mensaje.length} caracteres.`);

// 5️⃣ Lista con búsqueda y transformación
// Crea la variable:
// compras: arroz, fideos, aceite, sal
// Debes mostrar:
// Si existe la palabra "aceite"
// El texto completo en MAYÚSCULAS
// La cantidad total de caracteres
let compras = "arroz, fideoss, aceite, sal";
console.log(`La lista ${compras.toUpperCase()} tiene ${compras.length} caracteres. \n ${compras.includes("aceite")}`);


// 6️⃣ Conversión + análisis
// Crea las variables:
// numeroCasa: 456
// numeroCasaTexto (vacía)
// Debes:
// Convertir el número a texto
// Mostrar el número convertido
// Indicar su tipo de dato
// Indicar cuántos caracteres tiene
let numeroCasa = "456";
let numeroCasaTexto = String(numeroCasa);
console.log(`Mi número de casa es ${numeroCasaTexto} es de tipo ${typeof numeroCasaTexto} y tiene ${numeroCasaTexto.length} números.`);


// 7️⃣ Identificación personal extendida
// Crea las variables:
// nombre: Diego
// apellido: Rojas
// Debes mostrar un mensaje que:
// Muestre el nombre completo
// Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
// Muestre todo en MAYÚSCULAS
let nombre1 = "Diego";
let apellido = "Rojas";
let nombreCompleto = `${nombre1}${apellido}`
console.log(`Hola, me llamo ${nombre1} ${apellido} y el nombre completo tiene: ${nombreCompleto.length} caracteres` .toUpperCase());

// 8️⃣ Verificación de contenido
// Crea la variable:
// frase: Hoy aprenderemos sobre strings
// Debes mostrar:
// Si contiene la palabra "strings"
// La frase en MAYÚSCULAS
// La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log(`La frase "${frase}!" \n ${frase.includes("strings")} y tiene ${frase.length} caracteres.` .toUpperCase());



// 9️⃣ Comparación de formatos
// Crea la variable:
// texto: Programar es divertido
// Debes mostrar en un solo mensaje:
// El texto original
// El texto en minúsculas
// El texto en mayúsculas
// La cantidad de caracteres
let texto = "Programar es divertido";
console.log(`${texto.toLowerCase()} ${texto.toUpperCase()} ${texto.length} caracteres`)


// 🔟 Desafío completo integrado
// Crea las variables:
// curso: 4C
// anio: 2026
// Debes mostrar un mensaje que:
// Indique el curso y año
// Convierta el año a texto
// Indique el tipo de dato del año convertido
// Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C"
let anio = "2026"
let aniotexto = String(anio)
console.log(`CURSO:${curso} AÑO:${String(anio)}, TIPO:${typeof String(anio)}` .toUpperCase())