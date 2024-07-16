# Bucles 
- Los bucles son estructuras de control de flujo que van a repetir el codigo hasta que se cumpla una cierta condición.
- Pueden recorrer cualquier tipo de dato.
- BUENA PRACTICA UTILIZAR LET Y CONST EN BUCLES.
***For**

- El bucle for posee 3 parametros.
- Parametros.
    - Iniciador: es una variable que utilizamos dentro del bucle.
    - Condición: es la condicion que se tiene que cumplir para que el bucle pare.
    - Paso: 
        - puede ser  de incremento o decremento, se ejecuta por cada vuelta del bucle. 
        - Actualiza la variable de iniciación.
- Hay una gran diferencia en declarar la variable con var o let.
    - var tiene ambito de funcion o global y sufre de hoisting.
        - Si se necesita utilizar esta variable en el ambito global utilizamos var.
    - let tiene ambito de bloque es decir no existe fuera del bloque 
        - Si necesitamos que la variable no choque con otras y solo se encuentr dentro de este bloque.

```js
let arr = [1, 2, 3, 4];

var i = 0
console.log(`esto es `, i)
for (i; i < arr.length; i++) {
    console.log(arr[i]);
};

console.log(`Despues del bucle`, i); // Aqui i en el ambito global de va actualizando.
-------------------------------
var i=0;

let arr=[1,2]
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
};

console.log(`ESTO ES I EN AMBITO GLOBAL`,i); // Aqui lo que pasa es que i  del ambito global se sobreescribe con mi variable dentro del bucle debido a que estas poseen ambito global (solo ven el contexto global.)
---------------------------------------
let j = 0;

for (let j=0; j < arr.length; j++) {
    console.log(`esto es j dentro del bloque`, j);
    console.log(arr[j]);
};

console.log(`Esto es j en ambito global`,j);
```

***for await of***
- Se utiliza para recorrer estructuras de datos que son iterables, que devuelven una operacion asincrona como una promesa.
- Es buena practica utilizarlo con async await.


SE DEBE VER PROMESAS.

***for of***
- Permite iterar sobre cualquier estructura de datos iterable.
- itera directamente sobre los elementos sin necesidad de manejar indices o gestionar la iteración.
    - array.
    - objetos iterables.
    - string.
    - map.
    - set.
- Es una forma mas moderna de iterar (ES6).

***array***
- Puede iterar directamente.
```js
let arr=[[1,5,[11,12]],[2,6],[3,7,9]];
for (const i of arr) {
    console.log(i); //  si yo no hago destructuring me devolveria cada elemento del primer array.
};                  // [ 1, 5, [ 11, 12 ] ] 
                    // [ 2, 6 ] 
                    //[ 3, 7, 9 ]

for (const [i] of arr) {
    console.log(i); // Al hacer destructuring estoy desestructurando cada sub-array y devolviendo 
                    //el primer  elemento  de   los mismos.
};                  //1
                    //2
                    //3

for (const [i,j] of arr) {
    console.log(i,j); //  si yo agrego mas variables cada variable estara tomando el segundo valor de  cada
                      // subarray, y asi sucesivamente.
};                    //1 5
                     //2 6
                     //3 7

```

***Objetos***