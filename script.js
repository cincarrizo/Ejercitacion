/* Escribir un programa que muestre un prompt donde el usuario ingresa un número, luego muestra otro prompt pidiendo otro número, finalmente el programa muestra una alerta con el resultado de la suma. */
/* 
var n1,n2,vsuma;
	n1 = parseInt(prompt('Ingrese un numero'));
	n2 = parseInt(prompt('Ingrese un segundo numero'));
	
	vsuma = n1 + n2;
	alert ('La suma de los numeros es '+vsuma); */



/*     Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en una alerta la temperatura en Fahrenheit. */
/* var celsius, fahrenheit;
celsius = prompt ("Ingrese la temperatura en grados Celsius", 0);
fahrenheit = (celsius * (9/5) + 32);

alert (celsius + "C grados son " + fahrenheit + "F grados");
 */



/* Pedir un número a un usuario a través de un prompt y luego dividirlo por 10, ejemplo: 5 / 10 igual 0.5*/
/* var n1, vdivision;
n1 = prompt ("Ingrese un numero");

vdivision = n1 / 10;
alert (n1 + " dividido por 10 da como resultado " + vdivision); */



/* Si a = [1,2,3] crear un script que determine de muestre un alert del tipo de dato de a. */
/* CHEQUEAR
let a = [1, 2, 3] 
alert (typeof a) */



/*  Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en una alerta.*/
/* var numero;
numero=prompt('Ingrese un numero:');
if (numero % 2 == 0)
{
alert('El numero introducido es par');
}
else {
    alert('El numero introducido es impar');
} */



/* Crear un programa que determine si un número introducido en un Prompt es divisible por 5 o no, mostrar el resultado con console.log */
/* var numero;
numero=prompt('Ingrese un numero:');
if (numero % 5 == 0)
{
console.log('El numero introducido es divisible por 5');
}
else {
    console.log('El numero introducido no es divisible por 5');
} */



/* Crear un programa que determine si un número introducido en un popup es divisible por 11 y 5 o no, mostrar el resultado con console.log */

/* var numero;
numero=prompt('Ingrese un numero:');
if (numero % 5 == 0 && numero % 11 ==0)
{
let newWin = window.open("about:blank", "hello", "width=200,height=200");
newWin.document.write("El numero introducido es divisible por 5 y por 11");
}
else {
    let newWin = window.open("about:blank", "hello", "width=200,height=200");
newWin.document.write('El numero introducido no es divisible por 5 y por 11');
} */



/* Crear un programa que le pida al usuario dos números en un Prompt y luego muestre en un alerta el número mayor. */

/* var n1, n2;
n1 = prompt ('Ingrese un numero:');
n2 = prompt ('Ingrese un segundo numero:');
if (n1 > n2) 
{
alert (n1 +" es mayor a "+ n2);
}
else
{
    alert (n2 + " es mayor a " + n1);
} */



/* Crear un programa que le pida al usuario primero un números al usuario a través de un prompt y luego un segundo número para luego mostrar en un alerta el número mayor, esta vez realizar el ejercicio ocupando un if ternario.
 */
/* var n1, n2;
n1 = prompt ('Ingrese un numero:');
n2 = prompt ('Ingrese un segundo numero:');
var nMayor = n1>n2? alert(n1 +" es mayor a "+ n2):alert (n2 + " es mayor a " + n1); */



/* Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.

 */

/*  var secuencia;
secuencia = prompt ('Inserte una secuencia alfanumerica');
if (secuencia[0] === '0'|| secuencia[0] === '1'||secuencia[0] ==='2'||secuencia[0] ==='3'||secuencia[0] ==='4'||secuencia[0] ==='5'||secuencia[0] ==='6'||secuencia[0] ==='7'||secuencia[0] ==='8'||secuencia[0] ==='9')
{
    alert ("La secuencia comienza con un numero");} 
else{
        alert("La secuencia comienza con una letra");
} */




/* Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.*/

/* var ang1,ang2, ang3, vsuma;
ang1 = parseInt (prompt ("Inserte el valor del primer angulo de un triangulo"));
ang2 = parseInt (prompt ("Inserte el valor del segundo angulo de un triangulo"));
ang3 = parseInt (prompt ("Inserte el valor del tercer angulo de un triangulo"));

vsuma = ang1 + ang2 + ang3 ;
if (vsuma == 180)
 {
    console.log('El triangulo es valido');
}
else {
    console.log('El triangulo no es valido');
} */



/* Determinar si una palabra empieza con mayúscula o no. */

/* function empiezaConMayuscula(texto) {
    let patron = /^[A-Z]/;
    return patron.test(texto);
} 

if (empiezaConMayuscula(prompt ('Inserte una palabra'))) {
    alert ("La palabra comienza con mayuscula");
}
else {
    alert ("La palabra comienza con minuscula");
} */



/* Determinar si un año dado es bisiesto. */

/* const esBisiesto = (year) => {
    return (year % 400 === 0) ? true : 
                (year % 100 === 0) ? false : 
                    year % 4 === 0;
  };

if (esBisiesto (prompt ('Inserte un año'))){
    alert ("Es un año bisiesto");
}
else {
    alert ("No es un año bisiesto")
} */


/* Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y 10, el usuario , 
luego a el usuario se le pedirá que introduzca un número en un popup para intentar adivinarlo. 
Si la entrada del usuario coincide con el número de conjetura, el programa mostrará un mensaje de "buen trabajo" 
de lo contrario mostrará un mensaje de "No corresponde" */


/* var numAzar = Math.ceil(Math.random()*10);
console.log(numAzar)

if (numAzar == (prompt("Inserte un numero entre 1 y 10 al azar"))) {
    alert ("Buen trabajo");
}
else {
    alert("No corresponde");
} */




/* El siguiente código tiene un error que se produce en algunos casos especiales, descubrirlo y arreglarlo: */


/* const edad = parseInt(prompt("¿Cuál es tu edad?"));
if (edad < 13) {
    console.log("Es niño");
} else if (edad < 18) {
    console.log("Es adolecente");
} else {
    console.log("Es adolecente");
} */




/* Negar las siguientes expresión de forma de mantener la tabla de verdad, 
crear el programa que muestre el valor de la expresión a medida que se cambia los valores de a y b. */
var a, b;
a = 

!a && !b
!a || !b