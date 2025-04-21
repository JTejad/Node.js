//Objetos

/*Estos podríamos considerarlos como una variable especial que puede contener más 
variables en su interior. Se trata de una estructura que permite crear colecciones de datos 
que tienen sentido en conjunto pero que a diferencia de los arrays que se ordenan mediante 
un índice, en los objetos, cada propiedad o elemento es un par clave/valor separado de 
otro a través de una coma. */

/*Características de los objetos 
Pares clave/valor 
Cada dato en un objeto está asociado a una clave única a la que se la conoce como 
propiedad. Normalmente se dice que un objeto está compuesto por propiedades.*/
 
      const student1=  { 
        name: 'Juan', 
        age: 30, 
        active: true 
      };  
 
/*Dinamismo 
Los objetos pueden expandirse o modificarse en tiempo de ejecución, añadiendo, 
eliminando o actualizando propiedades. 
Esto representa un cambio de paradigma respecto de las variables, ya que no podemos 
crear variables en tiempo de ejecución pero si podemos lograr que un objeto guarde una 
propiedad que antes no existía.*/
 
      const student2=  { 
        name: 'Juan', 
        age: 30, 
        active: true 
      };        student2.address=  'Calle Falsa 123'; 

/*Métodos 
Además de almacenar datos, un objeto puede incluir funciones como valor de sus 
propiedades. A estas funciones se las llama métodos. */

const calculator=  { 
        addition: (a,b ) =>a + b , 
        subtract: (a,b ) =>a -  b 
    }; 
    console.log(calculator.addition(5,3 )); // 8

/*Objetos Literales 
Los literales de los objetos en Javascript son las llaves {}. Declarar un objeto asignando a 
una variable un par de llaves que contenga propiedades es la manera más sencilla y 
tradicional de hacerlo. 
Las propiedades son cada clave del objeto a las que se le asigna un valor. Ese valor puede 
ser de cualquier tipo de dato, incluso una función. 
A continuación vemos un ejemplo de objeto con propiedades y valores: */
 
    const user=  { 
      name: 'Jhon', 
      lastName: 'Doe', 
      age: 27, 
      address: 'Fake street 123', 
      isMarried: false, 
      sayHi: () => console.log('Hi there, buddy') 
    }; 

        console.log(user.name); // Jhon 
    console.log(user.age); // 27 
    console.log(user.sayHi()); // Hi there, buddy 
 
/*Otra forma, es acceder colocando el nombre de la propiedad como un string dentro de 
corchetes, de la siguiente manera:*/
 
    console.log(user['age']); // 27 
    console.log(user['isMarried']); // false 
    console.log(user.name); // Jhon 
    console.log(user.age); // 27 
    console.log(user.sayHi()); // Hi there, buddy 
    console.log(user['age']); // 27 
    console.log(user['isMarried']); // false 

/*Por otra parte, podemos agregar propiedades adicionales a un objeto, luego de que este 
haya sido definido. Para ello simplemente accedemos a una propiedad nueva (que no exista 
en el objeto) y con el operador de asignación (=) le damos un valor. */
 
    const user2=  { 
      name: 'Jhon', 
      lastName: 'Doe', 
      age: 27, 
      address: 'Fake street 123', 
      isMarried: false, 
      sayHi: () => console.log('Hi there, buddy') 
    };  
    user.gender=  'Male'; 
 
    console.log(user2); 

        /** 
     { 
       name: 'Jhon', 
       lastName: 'Doe', 
       age: 27, 
       address: 'Fake street 123', 
       isMarried: false, 
       sayHi: () => console.log('Hi there, buddy'), 
       gender: 'Male' 
     } 
   */ 

/*Objetos Funcionales 
A diferencia de los Literales, estos objetos se declaran como una función de javascript 
tradicional. */

function Person(name, age) { 
    this.name=  name; 
    this.age = age; 

    this.sayHi = function () { 
      console.log(`Hola, me llamo ${this.nombre} y  
       tengo ${this.age} años. 
     `);       }; 
  }; 
  
  // Creación de instancias     
  const person1 = new Person("María", 30); 
  const person2 = new Person("Juan", 25); 
  
  person1.sayHi(); // Hola, me llamo María y tengo 30 años. 
  person2.sayHi(); // Hola, me llamo Juan y tengo 25 años. 

/*Ahora el molde Person creado a través de la función denominada “función constructora” 
nos permite crear objetos basados en las propiedades y métodos previamente definidos. 
Para ello, podemos crear tantas variables como sean necesarias y asignarles mediante la 
palabra reservada new, seguida de la invocación de la función constructora, pasándole los 
argumentos requeridos, la creación de un nuevo objeto. 
Ahora sí tenemos nuestros objetos person1 y person2 que pertenecen al tipo de objeto 
Person. Lo que hicimos fue crear un molde con el fin de reimplementar esta “fórmula” cada 
vez que necesitemos un nuevo objeto con las características de Person. */

/*La palabra reservada this 
En el ejemplo anterior, se utiliza una palabra nueva llamada this, esta palabra tiene 
diferentes usos y significados dependiendo el contexto donde es utilizada. 
En JavaScript, this es una referencia que apunta al contexto actual de ejecución. Su valor 
depende de cómo se invoque la función: 
 
/*1. 
En una función constructora (objeto funcional) o clase: 
this se refiere al objeto recién creado por el uso de new. */
 
 
    function Person(name, age) { 
      /* 
      * this hace referencia a las variables 
      * declaradas dentro de la función constructora 
      */ 
      this.name = name; 
      this.age=  age; 
      this.sayHi = function () { 
        /* 
        * aquí también invoca las variables definidas 
dentro del 
        * objeto para ser utilizadas en un método 
interno. 
        */ 
        console.log(`Hola, me llamo ${this.nombre} y 
          tengo ${this.age} años. 
        `);       }; 
    }; 

/*2.   En un método de objeto: 
    this hace referencia al objeto al que pertenece el método.*/
     
    /** 
     * Aquí this se utiliza dentro del 
     * método (o función) de un objeto 
     * literal para hacer referencia a 
     * una propiedad dentro del 
     * mismo objeto 
     */ 
    const hero=  { 
        alias: 'Cody', 
        universe: 'TechLab', 
        powers: ['fly', 'nightvision', 'stregth'], 
        hit: 128, 
        vitality: 100, 
        decreaseVitality: function(damage) { 
        return this.vitality-  damage 
        } 
    }  

/*3.   En funciones normales: 
El valor de this es undefined en entornos fuera del navegador o apunta al objeto 
global window en navegadores. 
●  Si usamos Javascript fuera del navegador(como en Node) this tomará el 
valor de undefined 
●  Si lo usamos en un entorno web, this hará referencia al objeto global 
window que contiene propiedades del navegador como el DOM (document 
object model).*/

    function sayHi() { 
    console.log(`Hi there i'm ${this}`); 
    }  

/*4.  En funciones flecha (=>): 
    this conserva el valor del contexto en el que se definió la función.*/
     
        /* Aquí this devuelve undefined en un 
        * entorno de servidor o error en un 
        * navegador ya que window.vitality 
        * no existe. 
        */      const hero2=  { 
          alias: 'Cody', 
          universe: 'TechLab', 
          powers: ['fly', 'nightvision', 'stregth'], 
          hit: 128, 
          vitality: 100, 
          decreaseVitality: (damage) => this.vitality-  damage 
        }  
/*Para evitar esto podemos cambiar this.vitality por hero.vitality o 
simplemente considerar cambiar el arrow function o función de flecha por una 
función expresada tradicional function(){...} donde el this si toma en cuenta 
el contexto como en el ejemplo del punto 2.*/