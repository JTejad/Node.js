//Declaracion de una funcion

function search(){
    //proceso encapsulado
}

//Funciones expresadas

const search = function(){
    //proceso encapsulado
}

//Invocar funciones

function subtract(){
    return 20 - 10
}

subtract(); // 10

//Return 

function subtract(){
    return 20 - 10
}

const result = subtract();

// imprimimos el resultado en la terminal.
console.log(result); // 10

//Arrow functions
/*Introducidas al lenguaje a partir de la especificación ES6 del estándar EcmaScript, son otra 
forma de declarar nuestras funciones y hoy en día juegan un papel fundamental en la forma 
en la que se escriben programas de Javascript moderno. 
Una de las principales ventajas es que nos permiten declarar funciones que ocupen tan solo 
una línea de código. 
Para declarar un arrow function usamos la siguiente sintaxis: */

const subtract = () => {/* rutina o proceso */};

/*Cómo podemos observar, es similar a la declaración de una función expresada solo que 
prescindimos de la palabra reservada function y luego de los paréntesis colocamos una 
“flecha” compuesta por un signo  =y un signo  .>A continuación de ella el uso de llaves es 
OPCIONAL y en caso de NO usarlas, la función tendrá un return implícito para lo que 
esté inmediatamente después en la misma línea. */

const subtract=  () => 20-  10; // return implícito 

/*Si bien en el ejemplo anterior no fue necesario utilizar la palabra reservada return, es 
importante mencionar que esto solo es posible en los casos donde la función sea de una 
sola línea, en el caso de las funciones multilínea, agregamos el par de llaves {}, quedando 
de la siguiente manera: */

const subtract=  () => { 
    const resultado=  20-  10; 

    return resultado;  // return explícito 
  }; 

//Parametros y argumentos

/* Un parámetro es una variable listada dentro de los paréntesis en la declaración de 
función (es un término reservado para el momento de la declaración). */

// agrego 2 parámetros a la función 
const subtract=  (numA, numB) => { 
    const resultado=  numA-  numB; 

    return resultado;   
    }; 

/*Un argumento es el valor que es pasado a la función cuando esta es llamada (es el 
término para el momento en que se llama). */

/* Los valores 20 y 10 
* son los argumentos que toman 
* el lugar de los parámetros numA y numB 
*/ 
subtract(20, 10); 

//HOF: Funciones de orden superior 

/*Una función de orden superior, también conocida como callback, es una función que se 
pasa a otra función como un argumento, que luego se invoca dentro de la función externa 
para completar algún tipo de rutina o acción. Es decir, pasamos una función B por 
parámetro a una función A, de modo que la función A puede ejecutar esa función B de 
forma genérica desde su código, y nosotros podemos definirlas desde fuera de dicha 
función. */

function addition(a,b ) { 
    returna + b ; 
  } 

  function subtract(a,b ) { 
    returna - b ; 
  }  
  function calculator(a,b , action) { 
    return action(a,b ); 
  }  
  calculator(20, 10, addition); // 30 
  calculator(20, 10, subtract); // 10 

/*En el ejemplo anterior, creamos una función llamada calculator que espera tres 
parámetros, 2 valores y una acción. Aprovechamos esta lógica para pedirle que ejecute la 
función adition en caso que deseemos sumar ambos valores o subtract si lo que 
buscamos es restarlos. De esta manera, es la función calculator la encargada de 
ejecutar de forma interna la acción recibida por parámetro. 
De este comportamiento nace su famoso nombre callback, ya que el anidado de funciones 
con este comportamiento nos permite encadenar la ejecución de una función detrás de otra. */

//Arrays

/*Los arrays, arreglos o vectores son estructuras de datos utilizadas en la mayoría de los 
lenguajes de programación como una herramienta ideal para el agrupamiento de valores en 
forma de lista indexada. 
En javascript, un array es una colección de variables o datos que pueden ser todas del 
mismo tipo o cada una de un tipo de dato diferente diferente. Su utilidad se comprende 
mejor con un ejemplo sencillo: si una aplicación necesita manejar los días de la semana, se 
podrían crear siete variables de tipo texto lo cual representaría mayor dificultad a la hora de 
tratar esa información como un conjunto de datos relacionados. */

const var1=  'Lunes'; 
const var2=  'Martes'; 
const var3=  'Miércoles'; 
const var4=  'Jueves'; 
const var5=  'Viernes'; 
const var6=  'Sábado'; 
const var7=  'Domingo'; 

const week=  ['Lunes', 'Martes', 'Miércoles', 
'Jueves', 'Viernes', 'Sábado', 'Domingo']; 

//Acceso a los arrays

const fruits=  ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 
 
console.log(fruits.length); // 4 

// Indice                0         1           2           3 
const fruitsindex=  ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 

console.log(fruits[2]); // frutilla 

//Añadir o eliminar elementos

const fruits2=  ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 
     
fruits2.push('Kiwi');  
// ['Pera', 'Manzana', 'Frutilla', 'Durazno', 'Kiwi'] 
fruits2.unshift('Kiwi');  
// ['Kiwi', 'Pera', 'Manzana', 'Frutilla', 'Durazno']

//Para eliminar elementos al inicio o al final del array, utilizaremos pop y shift: 

const fruits3=  ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 
     
fruits3.pop(); // ['Pera', 'Manzana', 'Frutilla'] 
fruits3.shift(); // ['Manzana', 'Frutilla', 'Durazno'] 

//Unir elementos de un array en una cadena (string) 

/*En este caso utilizamos el método .join() que recibe como parámetro el separador de 
nuestros elementos. */
 
  const fruits4 = ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 
 
  fruits4.join(' - '); //'Pera - Manzana - Frutilla - Durazno' 

//Recorrer los elementos de un array 
/* Nos permite recorrer los elementos de un array y ejecutar una acción frente a cada 
iteración. El método .forEach() no devuelve nada y espera que se le pase por parámetro 
una función de callback que se ejecutará por cada elemento del array.  
En el siguiente ejemplo, fruit toma el valor actual de la iteración y ejecuta la función 
(fruit) => console.log(fruit) para imprimir cada valor en la consola. */

const fruits5=  ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 
 
fruits5.forEach((fruit) => console.log(fruit)); 

// Pera 
// Manzana 
// Frutilla 
// Durazno 

/*Filtrar elementos en un array 
Para ello usaremos el método .filter() a quien le debemos pasar una función de 
callback con la condición que deben cumplir los elementos para ser filtrados. */

const prices=  [125, 237, 58, 1920, 418]; 
 
prices.filter((price) => price >= 200);  
// [237, 1920, 418] 

//Modificar o crear arrays a partir de otros 

/*
● .slice(start, end): Devuelve los elementos desde la posición start hasta end 
(excluido). Inmutable 
● .splice(start, size): Altera el array, eliminando size (cantidad de elementos) 
desde posición start.Mutable
● .copyWithin(pos, start, end): Altera el array, modificando desde pos y 
copiando los ítems desde start a end.Mutable 
● .fill(element, start, end): rellena el array con element desde start hasta 
end.Mutable 
*/

/*Crear nuevos arrays a partir de una condición 
El método .map() es un método muy potente y útil para trabajar con arrays, puesto que su 
objetivo es devolver un nuevo array donde cada uno de sus elementos será lo que devuelva 
la función callback por cada uno de los elementos del array original.*/
 
   const prices2=  [125, 237, 58, 1920, 418]; 
 
   price2.map((price) => price *= 1.21); 
    
   // devuelve un array con todos los precios + el 21% 
   // [151.25, 287.77, 70.18, 2329.2, 505.78]
/*Acumular los valores de una array 
El método .reduce() se encarga de recorrer todos los elementos del array, e ir 
acumulando sus valores (o alguna operación diferente) y sumarlo todo, para devolver su 
resultado final.*/

  const prices3=  [125, 237, 58, 1920, 418]; 
 
  prices3.reduce((total, price) => total+  price,0 );  
  // 2758  
  /* total toma el 0 como \valor inicial\ y en cada iteración 
  * se le va sumando el price actual hasta recorrer todo el  
  * array 
  */  
 
 
  /*Iteradores de array 
  Si bien es posible recorrer arrays con los ciclos tradicionales como un for, existen una 
  estructura para este fin que simplifica mucho el trabajo a realizar. 
  Esta es la estructura for of, que propone la siguiente sintaxis:*/
      
    const fruits6 = ['Pera', 'Manzana', 'Frutilla', 'Durazno']; 
      for (let fruit of fruits6) { 
       console.log(fruit); 
     } 
   
   
   
     // Pera 
     // Manzana 
     // Frutilla 
     // Durazno 


//Template Literals 
/*Cadenas de texto más simples 
Los literal strings o template literals son una característica de JavaScript introducida en ES6 
que simplifica la creación y manipulación de cadenas de texto. Se escriben utilizando 
backticks (``) en lugar de comillas simples o dobles. 
Características principales: 
1.   Interpolación de variables: Permiten insertar valores dinámicamente dentro de una 
cadena utilizando la sintaxis ${expresión}.*/
 
  const userName=  'Juan'; 
  const age=  30; 
 
  console.log(`Hola, mi nombre es ${userName}  
  y tengo ${age} años.`); 
  // Hola, mi nombre es Juan y tengo 30 años. 
  
/*
2.  Soporte para varias líneas: Se pueden escribir cadenas que abarcan múltiples líneas 
sin necesidad de usar caracteres especiales como \n.
*/
 
 
  const message=  `Esta es una cadena 
  que ocupa varias 
  líneas.`; 
  
  console.log(message); 
 
  // Esta es una cadena 
  // que ocupa varias 
  // líneas.

/*
3.  Inclusión de expresiones complejas: Además de variables, se pueden incluir 
operaciones y funciones directamente.
*/ 
 
   const price = 150; 
  const tax = 1.21; 
   console.log(`El precio final es de $${price * tax}.`); 
  // El precio final es de $181.5. 
 
 
/*En conclusión, los template literals son una herramienta poderosa y flexible que optimiza el 
manejo de cadenas en JavaScript, especialmente en casos donde se mezclan variables, 
expresiones y texto.*/
   