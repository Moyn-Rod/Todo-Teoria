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

# Para Seleccionar Un Valor.
- Array.at( ):
    - Selecciona un elemento segun su indice.
    - Puede entrar desde el ultimo elemento usando numeros negativos.
```js
let arr=[1,2,3];

console.log(arr.at(0))  // En la posicion 0 se encuentra 1
console.log(arr.at(-1)) // En la posicion -1 se encuentra el ultimo elemento 3

```
- Array.entries( ):
    - Nos devuelve pares claves valor entre su indice y el valor, en forma de array.
    - Para avanzar en estos pares  se debe utilizar next().value.
    - {value:[indice:valor]} este es el objeto en si
    - Es conveniente iterarlos para obtener todos.   
```js
let arr=[1,2,3];

let news=arr.entries();

news.next().value // devolveria [0,1]
new.next().value // devolveria [1,2];

let arr2=[];
for i for news{
    arr2.push(i);
}

arr2=[[0,1],[1,2]]
```

- Array.includes() :
    - Busca un valor en el array
    - Retorna true o false.
    - parametros:
        - value: valor a buscar.
        - from index: 
            - desde que indice buscar.
            - Si ponemos valores negativos empieza en reversa.

```js
let arr=[1,2,3];

console.log(arr.includes(1)) //retorna true.
console.log(arr.includes(4)) //retorna false.
console.log(arr.includes(1,1)) // retorna false por que estoy buscando desde el primer indice(2)-
console.log(arr.includes(3,-1)) // Retorna true por que busca desde arr.length(el ultimo indice )
```

# Para modificar.
- Array.concat( ):
    - Este metodo concatena 2 o mas arrays.
    - Realiza una copia superficial de las referencias de los arrays que se encuentran en las pila. Y crea un nuevo array
    - Si se modifica alguno de los arrays originales se modificara el nuevo array, por que esta referenseado a ellos. 
    - los arrays a concatenar van separados por , . 
```js
let arr = [1, 2, 3];

let arr2 = [4, 5];

let arr3=arr.concat(arr2); 

console.log(arr3);// retorna [1,2,3,4,5]

let arr6=arr3.concat(arr,arr2) // se repiten infinitamente los valores creando nuevas referencias a los mismos array 

console.log(arr6) //[,1,2,3,4,5,1,2,3,4,5]
```
- Array.fill( ):
    - Nos permite cambiar indices del arreglo segun mis parametros.
    - Si el primer parametro es obj, rellena los demas lugares con referencias a este obj, es decir que si realizo cambios en este se veran reflejados en los otros.
    - Acepta valores negativos.
    - Parametros:
        - target: el valor con cual mutaremos.
        - start: desde que indice iniciamos. ||0
        - end : Hasta  que indice no incluido || array.length.
```js
let arr2=[1,2,3,4,5];

console.log(arr2.fill(7,3,5)) //[1,2,3,7,7] desde el indice 3 hasta el indice 5 que no existe.

let arr =Array(3).fill(4);
console.log(arr);           // Retorna [4,4,4]

let arr7=[].fill.call({0:`aa`, 1:`bb`, 2:`cc`, length:3},4)

console.log(arr7);      // {0:4, 1:4, 2:4, length: 3}
```

- Array.copyWithin( ):
    - Permite insertar y mutar un array.
    - realiza una copia de una seccion a otra en el mismo array.
    - 3 parametros.
        - target: en donde se insertara la copia.
        - star: desde que indice.
        - end: hast que indice hare la copia (no incluye el end)
```js
let arr=[1,2,3,4,5];

let new=arr.copyWithin(0,1,3) 

console.log(new); //devolveria [2,3,3,4,5]
```
- Array.flat( )
    - Te permite aplanar los sub-array  que se encuentran dentro de un array.
    - Podemos definir a que nivel se aplicara por defecto es 1.
```js
let array=[1,2,3,[4,5]] 

let newArr=array.flat(1)

console.log (newArr) // retorna [1,2,3,4,5]

let arr=[1,2,3,[4,5,[6,7,8]]];

let newArr2=arr.flat(2)

console.log(newArr2); // retorna [1,2,3,4,5,6,7,8]
```
- Array.flatMap( )
    - Es una convinacion de flap y map.
    - parametros
        - cb:
            - value: valor actual de elemento.
            - index: indice actual del elemento.
            - arr:  el array completo. 
        - thisArg: Apunta al contexto de un determinado tipo de dato.

# Condicionales
- Array.every ( )
    - Recorre y prueba si todos los elementos de un array,cumplen una determinada condicion.
    - Devuelve booleanos true o false.
    - Posee 2 parametros:
        - callback:
            - Elemento actual.
            - Indice actual.
            - El arreglo completo.    
    
        - Una fn this.
    - Devuelve true o algo que le decimos que haga.
    - Siempre debe retornar algo para que funcione.
    - Buena practica guardar el retorno del metodo en una variable.
```js
let arr=[1,2];

arr.every((ele,ind,arr)=>{
        console.log(ele>0); // Devuelve true.
});

arr.every((ele,ind,arr)=>{
        if(ele>0) {ind:`${arr}`} // Aqui se genera un error, si pongo una condicion explicita si o si debe retornar algo                        de lo contrario retornaria undefined. lo que seria falsy y se detendria el codigo.
});

arr.every((ele, ind) => {
  if (ele > 0) {
    console.log({ind: `${ind}`});
    return true; // Debes retornar true para que every siga iterando
  }
  return false; // O retornar false si la condición no se cumple
});


let arr = [1, 2];

let obj={};
arr.every((ele, ind) => {
  if (ele > 0) {
   return obj[ind]=ele 
  }
  return false; 
});

console.log(obj) //{0:1, 1:2}

let obj={
    0:`a`,
    1:`bb`,
    2:`cc`,
    length:3
 };

let result=[].every.call(obj,(ind)=>typeof`string`);

console.log(result);
```

- Array.filter ( )
    -  Crea un nuevo array con los elementos que cumplen una determinada condición.
    - Si ningun ele cumple la condición devolvera un array vacio.
    - Siempre debe retornar algo.
    - Una vez que filter haya recorrido el array original, aunque este se modifique las nuevas instancias de arrays no.
    - parametros:
        -Callbacks:
            - elemento actual.
            - indice actual.
            - array completo.
        - this:
            - Te permite apuntar al contexto de un determinado tipo de dato.
            - Al utilizarlo se debe usar fuction regulares o expresadas, debido a que las arrow no tienen su propio contexto. 
```js

 let arr=[15,2,4,5,10,12,30];

 let arr2=arr.filter((ele,ind,arr)=>{
        return ele>=10;
 });

 console.log(arr2); // retorna [15,10,12,30]


 let arr3=arr.filter((ele,ind,arr)=>ind===0)

 console.log(arr3); // retorna [15]

 let arr4=arr.filter((_,__,arr)=>{

    return arr
 })

 console.log(arr4) // retorna [15,2,4,5,10,12,30]

 let obj = {
    minValue: 10
};

let arr = [5, 10, 20, 35, 2];

let arr2 = arr.filter(function f (ele) {
    
    return ele <= this.minValue;
}, obj);

console.log(arr2);
```
- Array.find( )
    - Devuelve el primer elemento que cumpla con la condición.
    - Cuando lo encuentra corta la ejecución.
    - si no lo encuentra devuelve undefined.
    - Si modifico un elemento antes de que find pase por el mismo lo toma. 
    - Parametros:
        - Cb:
            - Ele: elemento actual.
            - ind: Indice actual
            - arr: Array completo.
        - Thisarg: apunta a un contexto. 

```js 
let arr2=[
    {nombre:`a`},
    {nombre:`b`},
    {nombre:`c`},
    {nombre:`d`},
];


let busca=arr2.find(({nombre})=>{
    console.log(nombre)
    return typeof(nombre)===`string`;
});

console.log(busca);   // Aqui estoy desestructurando el obj.y busca el que es tipo string.
```
- Array.findLast ()
    - Lo mismo que find pero itera de manera inversa(desde el final del array).
    - Retorna undefined si no lo encuentra.

- Arrar.findIndex( )
    - Itera sobre los elementos y devuelve el indice del elemento que cumpla con la condición.
    - Si no lo encuentra retorna -1.
    - Parametros:
        - cb: 
            - value:elemento actual.
            - index: Indice del elemento actual.
            - arr: Array completo.
        -thisArg: Puntero de this.


- Array.findLastIndex ( )
    - Recorre el array y devuelve el indice del primer elemento que cumpla con la condición.
    - Itera desde el final del array. 
    - Actua de manera igual que findIndex ( ) pero en orden inverso.

- Array.forEach ( )
    - Recorre el array y le aplica una modificación segun la fn que le pasemos .
    - Una vez iniciado el forEach aunque modifiquemos el array original no tomara ese valor.
    - Para pararlo se debe agregar una excepción.
    - Los  ele vacios o undefined o null los salta.
    - Parametros:
        - cb:
            - value: elemento actual.
            - index: indice actual.
            - arr: Array completo.
        -thisArg: Puntero que apunta a algun contexto.
```js
let arr=[1,2,3];

arr.forEach((ele,ind)=>arr[ind]=ele*2) // Como solo recorre el array de esta manera podria modificarlo.
                                        // Retorna [2,4,6]

function Lista(){                       // Creo una fn constructora.
    this.count=0;
    this.total=0;
};

Lista.prototype.add=function(arr){ // agrego una funcion que recorre los ele del array aumenta el contador y suma  ele
    arr.forEach(function(ele){
        ++this.count
        this.total+=ele      
    },this);
}
                          // Debido a que estoy utilizando el thisArg y  este esta  dentro del contexto  de la instancia de Lista referencia a los this de la lista.

const ver =new Lista();
ver.add(arr)

console.log(ver)
```
- Array.indexOf( ):
    - Retorna el indice de un elemento que buscamos.
    - si no lo encuentra retorna -1.
    - Paramentros:
        - elemento que buscamos.
        - Desde que indice buscar.
```js
let arr=[1,2,3]
console.log(arr.indexOf(2)) //retorna el indice 1
console.log(arr.indexOf(5)) // retornaria -1
console.log(arr.indexOf(3,2)) // busca desde el indice 2 el valor 3
```
- Array.lastIndexOf():
    - Busca  el indice del elemento.
    - Realiza lo mismo que indexOf Y Actua de la misma manera solo que ingresa por el final.

- Array.join( ):
    - Junta todos los elementos de una matriz y los retorna en una cadena.
    - Parametro:
        - Unicamente un separador puede ser , - _  (debe ser un string).

```js

let arr=[1,2,3];
console.log(arr.join(`-`)) //Retornaria `1-2-3` en una cadena.
```


- Array.Keys( )
    - Devuelve un obj con las claves.
    - Si hay una ranura vacia de todas maneras lo toma como un indice.

```js
let arr=[1,2,3,4,5,6,7,8,9,10,11]

let obj={
    length:3
}

for (const i of arr.keys()) {
    console.log(i) // Si retorna.
}

for (const i of Array.prototype.keys.call(obj)) {
    console.log(i)  // 1,2,3,4,5,6,7,8,9
}
```


