/* PRUEBAS PARA ACCEDER A INDICES DE ARRAYS*/

// let array=[1,2,3,[1,5,8],{e:`a`},function nombre(nombre){return `Hola ${nombre}`}];

// console.log(array[0]); // Ingresamos al primer valor del array 0 
//                       // Cuando ingresamos a los indices estos empiezan desde 0

// console.log(array.length) // Cuando utilizamos .length este cuenta desde 1


// console.log(array[3][0]) // Accedemos al valor del array anidado.

// console.log(array[4].e) // Accedemos al valor del objeto que esta en el indice 4

// console.log(array[5](`Rodrigo`)) // Accedemos e invocamos la fn que se encuentra en el indice 5

//--------------------------------

/* METODOS */



let str = `Hola`;


let arr = Array.from(str)

console.log(arr) // Transforma en array un objeto iterable o que contiene la prop length 

console.log(Array.from({ 0: `arr`, 1: {}, 2: [], length: 3 })) // Transforma en array un objeto indexado y con la prop length.

let segundoParametro = Array.from(str, (x) => x.toUpperCase()); // Se le aplica el segundo parametro que es un map.

console.log(segundoParametro);





const fn = function range(stop, start, step) {
    let arr = Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + step * i)

    return arr;
};

console.log(fn(10, 0, 1)) //Esta fn me permite crear rangos.


