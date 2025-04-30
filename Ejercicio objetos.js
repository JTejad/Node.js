/*1.  Crea un array con 10 objetos, donde cada objeto represente un automóvil con la 
siguiente información: 
○  Marca 
○  Modelo 
○  Año 
○  Color 

2.  Usa un método de array para recorrer la lista e imprime por consola todos los datos 
de los automóviles cuyo año sea mayor a 2018. */

//1
const autos = [
    { marca: 'Toyota', modelo: 'Corolla', año: 2020, color: 'Rojo'},
    { marca: 'Honda', modelo: 'Civic', año: 2019, color: 'Azul' },
    { marca: 'Ford', modelo: 'Focus', año: 2021, color: 'Negro'},
    { marca: 'Volkswagen', modelo: 'Gol', año: 2006, color: 'Gris Cosmos'},
    { marca: 'Honda', modelo: 'Fit', año: 2007, color: 'Negro'},
    { marca: 'Ford', modelo: 'Mondeo', año: 2018, color: 'Gris'},
    { marca: 'Hyundai', modelo: 'Tucson', año: 2020, color: 'Rojo'},
    { marca: 'Peugeot', modelo: '206', año: 2004, color: 'Blanco'},
    { marca: 'Volkswagen', modelo: 'Golf', año: 2004, color: 'Blanco'},
    { marca: 'Peugeot', modelo: '208', año: 2021, color: 'Fucsia'},

];

//2

const autosNuevos = autos.filter(auto => auto.año > 2018);

autosNuevos.forEach(auto => {
  console.log(`Marca: ${auto.marca}, Modelo: ${auto.modelo}, Año: ${auto.año}, Color: ${auto.color}`);
});


function contarAutosColor(colorBuscado){

  let contador = 0

  for (const{color} of autos){

    if (color.toLowerCase() === colorBuscado.toLowerCase()) {
    
      contador ++; 
      }

    }

    console.log(`Hay ${contador} automoviles de ${colorBuscado}.`);


  }

contarAutosColor('Negro'); // Muestra: Hay 2 automóvil(es) de color Negro.
contarAutosColor('Blanco'); // Muestra: Hay 2 automóvil(es) de color Blanco.
