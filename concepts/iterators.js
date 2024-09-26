//High Order Functions
//Funciones de Orden Superior
//Son funciones que reciben funciones como parametros
//funciones tambien se consideran como objetos
//parametros se pasan como atributos

const suma = (a,b) => a+b;
const resta = (a,b) =>a-b;

const operation = (a,b, callback) => {
    const result = callback(a,b);
    console.log ('El resultado es: ' + result);

}

operation (12, 5, suma);
operation(12,5, resta);
operation(12, 5, (a,b)=> a*b);


const cars = ['bocho', 'athos', 'pointer', 'tsuru', 'bmw'];

cars.forEach((car)=>console.log(car));
let filtrados = cars.filter(car=> car === 'tsuru');
console.log(filtrados)
filtrados = cars.filter(car=>car.includes('o'));
console.log(filtrados)

//regresar los que comiencen con a
//filtrados = cars.indexOf(car=>car.str)
//regresar los que terminen con u
//regresar los que tengam menos de 5 letras




//metodo map

const CARS = cars.map (car => car.toLocaleUpperCase());
console.log(cars);
console.log(CARS);


const srac = cars.map(car=>car.split('').reverse().join(''))
console.log(srac);


const carsEnvueltos = wrapping(cars);
carsEnvueltos.forEach(car => { console.log(car) });

//forEach, map, filter
//reduce

const numbers = [1,2,3,4,5,6,7,8,9,10];

const sumatoria = numbers.reduce((a, b) => a+b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a,b) => a*b);
console.log(factorial);



//every regresa verdadero si todos cumplen

const ages = [23,14,37,19,18,22,27];
const olders = ages.every(age => age>=18);
const youngers = ages.every(age => age<18);
console.log(olders);
console.log(youngers);
//some regresa como verdadero con un o que cumpla

const olders2 = ages.some(age => age>=18);
const youngers2 = ages.some(age => age<18);
console.log(olders2);
console.log(youngers2);



//Ejercicios

//Ejercicios
/**
*crear un array con elementos del 1 al 10
*crear uno nuevo con los cuadrados, map
*crear uno con los cubos, map
*crear uno nuevo con las mitades, map
*
*crear uno nuevo con los pares, filter
*crear uno nuevo con los impares, filter
*crear uno nuevo con valores entre 3 y 8, filter
*/

//elemntos del 1 al 10 y sus cuadrados
const arrays = [1,2,3,4,5,6,7,8,9,10];
const cuadrade = arrays.map(( array=> array**2));
console.log(cuadrade);

//array con los cubos
const cubes = arrays.map((array => array**3));
console.log(cubes);

//array con las mitades 
const halfs = arrays.map((array => array/2));
console.log(halfs);

//uno con los pares
const pairs = arrays.filter((array=> array%2 == 0));
console.log(pairs) 

//uno con los impares
const unpairs = arrays.filter((array=> array%2 != 0));
console.log(unpairs)

const beetwens = arrays.filter((array => array >=3 && array<=8));
console.log(beetwens);
