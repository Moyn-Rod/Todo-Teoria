# Bucles 
- Los bucles son estructuras de control de flujo que van a repetir el codigo hasta que se cumpla una cierta condición.
- Pueden recorrer cualquier tipo de dato.
- BUENA PRACTICA UTILIZAR LET Y CONST EN BUCLES.
# For

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

# for await of
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
- Como los objetos literales no son iterables, se debe utilizar distintas metodos que poseen los mismos.
    - obj.entries: retorna clave valor.
    - obj.value: retorna los valores.
    - obj.keys: retorna las prop.

```js
let obj={
    name:`a`,
    lastname:`b`
};

for (const i of Object.keys(obj)) {
    console.log(i)
};  // retorna 
    //name
    //lastname

for (const i of Object.values(obj)) {
        console.log(i);
}; // retorna
    //`a`
    //`b`


for( [key,value] of Object.entries(obj)){
    console.log(`key:${key} \n value:${value}`);
};  // retorna
    // key:name
    //value:a
    //key:lastname
    //value:b
```
# for in
- Se utiliza para recorrer las propiedades emnumerables de los objetos.
- Es decir recorre sus propiedades 
- El bucle for in itera tbm sobre las propiedades heredadas  y que se encuentran en su prototipo por eso es conveniente utilizar hasOwnProperty
 
```js
let obj ={
    nombre:'Rodrigo',
    edad:26,
    lastName:'Nicolas'
};

let property=``
for (const key in obj) {
    console.log(property=`key:${key}\n value: ${obj[key]}`);
};                                                          // retorna 
                                                            //key:`nombre` 
                                                            //value:`Rodrigo`, 
                                                            //key:`Edad` 
                                                            //value:`26`,
                                                            // key`Lastname` 
                                                            //value:`Nicolas`.

for(const key in obj){
    console.log(key);
};                     //Retona: nombre, edad,lastname, solo itera por sus propiedades emnumerables.
                       // para saber los valores debo ingresar a cada propiedades obj[key];
---------------------------------
function Persona(nombre,age){
    this.name=nombre;
    this.age=age;
};

Persona.prototype.lastName=`rayos`;


let ricardo=new Persona(`rodrigo`,`28`);

// console.log(ricardo);
// console.log(ricardo.lastName)

for (const key in ricardo) {
    console.log(key);
};  // En este caso retornaria name agre y lastname por que aunque este  en el prototipo de el obj sigue siendo una propiedad.

for (let key in ricardo) {
    if(ricardo.hasOwnProperty(key)){
        console.log(key);  
    } ;
};   // Para que no devuelva las propiedades heredadas podria utilizar un hasOwnProperty para que tome en cuenta unicamente las propiedades que posea el obj en si.

```
# while
- Se ejecuta mientras se cumpla la condición.
- Es bueno para cuando no sabes cuantas veces se  necesita repetir el codigo. 
- La condición se evalua en cada iteración, desde la primera iteración.
    - Si es verdadera sigue ejecutando, si es false se detiene.
- Precaución a los bucles infinitos.
```js
let num=10;

while(num>2){
    num-=2;
    console.log(num);
};

console.log(`ESTO ES NUM`,num); // num queda con el valor esperado ya que while resto 2 por  cada iteracion hasta que la condicion fue false.
```
# do while
- La diferencia con while es que el codigo al menos se ejecuta 1 vez, antes de evaluar la condición.
- Se ejecuta hasta que la condición sea false.

```js

let num=1

do {
    num++
    console.log(num);
} while (num===2); // En este caso primero se ejecuta el codigo antes de evaluar la condición. es decir num se hace 2.
                    // se evalua la condición num es estrictamente 2 entonces es true sigue ejecutando.
                    // num se hace 3, la condición de uqe num sea 2 da false entonces corta el codigo. 
```

***switch**
- Switch  es una alternativa a if else.
- Evalua el valor  de una expresion y en funcion de eso ejecuta un bloque de codigo.
- Continuara ejecutandose hasta que encuentre un break.
- posee un caso default por si no se ejecuta ninguno de los casos.
```js
let day=1;

switch (day) {
    case 1:
        console.log(`Miercoles`);
        break;
    case 2:
        console.log(`jueves`);
    default:
        console.log(`No Coindice con ninguno`);
        break;
};  // En este caso retorna miercoles por que coincide con el caso.


let num=2;

switch(num){
    case 1:
        console.log(`Es 1`);
        break;
    case 2:
        console.log(`es 2`);
    case 3:
        console.log(`se va a ver por que no tiene un brek`);
        break;
    default:
        console.log(`No coincidio`);
        break;
}; // En este caso retorna el caso 2 y 3 por que no posee un break
```
# Break && Continue

***break***
- Detiene el flujo de control oel switch y salta a la primera linea de codigo despues del bucle.

***continue***
- Salta una iteracion segun la condicion que pongamos.