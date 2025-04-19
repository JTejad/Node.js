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

     