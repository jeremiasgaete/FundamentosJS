console.log("conexión con js correcta")
/*
Dato: Tipo texto(string)
1.- Concatenación de texto con el signo +
podemos unir texto y variables
*/
//Concatenación: unir texto y/o variables
const nombre = "Jeremías";
const apellido = "Gaete";
//Unimos ambas constantes con un texto extra.
console.log("Hola, mi nombre es. " + nombre + " " + apellido);

/*
2.- Ver el tipo de dato (typeof)
*/ 
console.log("La variable nombre es un tipo de dato: " + typeof nombre);

//Template literals (forma moderna para concatenar)
console.log(`Hola, mi nombre es ${nombre} ${apellido}...`);

//Mostrar un largo de un string(texto) - Contar los caracteres.
// .length --> Para contar caracteres y espacios.
let palabra = "Paralelepipedo";
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

//Crear una frase y contar sus caracteres.
let frase = "Pokémon es el mejor juego";
console.log(`La palabra ${frase} tiene ${frase.length} caracteres.`);

// Métodos comunes en JS para formatear texto

// Transformar texto en Mayúsculas .toUpperCase()
let texto1 = "YoKaI-WAtcH mI AmIGo tU sErAS";
console.log(texto1.toUpperCase());

//transformar texto a Minúsculas .toLowerCase()
console.log(texto1.toLowerCase())

//Buscar un texto dentro de un string .includes()
let texto2 = "Navidad, Halloween, Pascua, San valentín";
console.log(texto2.includes("Pascua"))

//COnvertir una variable a texto String()
let telefono = 23457896;
let telefono_texto = String(telefono);
console.log(`Mi número de teléfono es ${telefono_texto} es de tipo ${typeof telefono_texto}`)