# Array

***Que Es***
- Un array es una estructura de datos, donde se guardan una coleccion de elementos.
- Puede ser cualquier tipo de dato.  
    - String.
    - Number.
    - BigInt.
    - Undefined.
    - Null.
    - Arrays.
    - Objetos.
    - Funciones.

***Como se Guardan Espacio En Memoria***
- En principio en la pila se guarda una referencia a al array para poder accederlo de manera rapida.
- Si Son Datos primitivos, estos de guardan de forma contigua es decir uno al lado del otro.
- Si Son Otros tipos de datos se guardan  de manera desorganizada mientras existe un espacio que los contenga.


```js
 let arr=[1,true.null,[a,b,c],{name:a, apellido:b}]

    //Pila:
      -------------
    |                |
    | x (ref array)  |
    |                |
     --------------


     -------------
    |                |
    |  1  true  null |
    |                |
     --------------

  let arr2=[1,true.null,[a,b,c],{name:a, apellido:b}]    

   //Pila:
      -------------
    |                |
    | x (ref array)  |
    |                |
     --------------


     ----------------------------------------------
    |                                              |
    |  1  true  null   ref:array ref:obj           |
    |                                              |
     ----------------------------------------------
      --------
    |         |
    |  a,b,c  |
    |         |
     ---------
     ----------------------
    |                      |
    | {name:a, apellido:b} |
    |                      |
     ----------------------


```
- Cada elemenos del array Posee un indice que los contiene.
- Para acceder a su longitud utilizamos la propiedad .length.
- Los array anidados tbm  se accedende esa manera.
- Los array son iterables.
- Poseen sus propios Metodos y propiedades.

***Acceder a un array*** 

```js
let array=[1,2,3,[1,5,8],{e:`a`},function nombre(nombre){return `Hola ${nombre}`}];

console.log(array[0]); // Ingresamos al primer valor del array 0 
                      // Cuando ingresamos a los indices estos empiezan desde 0

console.log(array.length) // Cuando utilizamos .length este cuenta desde 1


console.log(array[3][0]) // Accedemos al valor del array anidado.

console.log(array[4].e) // Accedemos al valor del objeto que esta en el indice 4

console.log(array[5](`Rodrigo`)) // Accedemos e invocamos la fn que se encuentra en el indice 5

```

***Propiedades***

-  Array.from():

    - Transforma en un array a 
        - Todo lo que se pueda iterar, es decir recorrer.
        - Para obj se tiene que cumplir las 2 condiciones. 
            - Objetos que esten indexados, es decir que contengan prop de numero enteros secuenciales.
            - Obj que contengan la prop length.
            - Muy importante tener en cuenta, poner length al final o contara como un indice mas desde el comienzo.
            - Si no esta bien inexado(comenzando desde 0) siempre completara con undefined.
    - Posee 3 parametros:
        - El tipo de dato a convertir a array.
        - una fn map para aplicar cambios al elemento.
            - 2 elementos.
                - cada elemento del array.
                - indices.
        - Una fn this para apuntar a un contexto especifico.

```js
let str=`Hola`;

let arr=Array.from(str) // Lo Convierte en un array [h,o,l,a];

let arr2=Array.from(str,(x)=>x.toUpperCase()) // metodo map que lo convertira en algo. [H,O,L,A]

let arr3=Array.from({lenght:3, 0:`a`, 1:`b`, 2:`c`}) // obj con prop lev y indexacion lo toma como un array [und,a,b]
let arr3=Array.from({lenght:4, 0:`a`, 1:`b`, 2:`c`}) // [undefined,a,b,c]
let arr3=Array.from({ 0:`a`, 1:`b`, 2:`c`,length:3}) // [a,b,c]
let arr3=Array.from({ 1:`a`, 2:`b`, 3:`c`,length:3}) // [undefined,a,b]
```
- Array.fromAsync():

    - Funciona igual a Array.from(), pero trabaja con: 
        -   iterables asincronos ( es decir promesas o un array de promesas)
        -   iterables.
        -  obj con lenght y indexacion.
    - posee los mismos parametros que Array.from
    - retorna una promesa que se debe resolver y al final devuelve un array.
    - Se espera cada elemento que genere la matriz.
    - Espera los elementos secuencialmente, es decir va uno por uno.
    - promise all
        - No espera que un elemento termine.
        - espera todos los valores simultaneamente.


- Array.isArray():
    - Devuelve si el objeto es un array.
    - true si es.
    - false si no.

- Array.of()
    - Crea array a partir de numeros.
    - Puedo pasar un unico numero o varios

```js
   let arr= Array.of(1) // devuelve [1]
   let arr2=Array.of(1,3,4,5) //devuelve [1,3,4,5] 	
```

***Metodos***

- Para seleccionar indices:
    - Array.at():
        - Selecciona un elemento segun su indice.
        - Puede entrar desde el ultimo elemento usando numeros negativos.
```js
let arr=[1,2,3];

console.log(arr.at(0))  // En la posicion 0 se encuentra 1
console.log(arr.at(-1)) // En la posicion -1 se encuentra el ultimo elemento 3

```
    -Array.