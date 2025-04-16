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

