# Teoria Computacional.
- Las computadoras hablan en binario es decir 0 y 1.
- 1 bit es la unidad mas chica de computadora, imaginemos una casilla donde se pueda guardar tanto un 0 como un 1.
- 1 byte poosee 8 bit.
    - A medida que se va hacia la izquierda esto va aumento su valor en potencia de 2.

            2^7, 2^6, 2^5, 2^4, 2^3, 2^2, 2^1, 2^0
            128  64   32   16   8    4    2    0

    - Asi sumando los resultados podemos representar cualquier numero.
    - el mayor numero que se puede representar es 255 (2^8-1).
    - ahora imaginemos 4 bytes serian 4 filas de 8 casillas. y asi sucesivamente.


# Tipos De Datos

- Existen 7 tipos de datos.
- Estos datos se dicen que son primitivos e inmutables y poseen sus propios metodos.

# Por que Inmutables

- Se refiere a que los valores primitivos no pueden ser modificados.
- La unica forma de modificarlos es reasignarlos en una nueva variable, es decir, crear un nuevo valor.
- Esto debe a la inmutabilidad de los primitivos y la forma en que js aplica sus metodos a los primitivos.
    - Cuando aplicas un metodo al primitivo lo que sucede por detras es que se envuelve el primitivo en un objeto temporal se le aplica el metodo y este se destruye al instante.

```js
var bar='bar'; //creo una variable con el valor primitivo 'bar'

console.log(bar); // muesta en consola 'bar'

console.log(bar.toUpperCase()) // Al aplicar el metodo este se envuelve en un objeto se aplica y se destruye 'BAR' 

console.log(bar) // Por la inmutabilidad y el unboxing en donde el objeto temporal se destruye estos cambios no persevarn

var algo=bar.toUpperCase(); // Distinto seria si yo guardo este valor en una nueva variable.

console.log(algo);  // No es que bar cambio su valor, en realidad se creo una copia del mismo y se le aplico el metodo.

console.log(bar);// Bar sigue con su mismo valor.
```

# Number

- Numeros positivos,negativos y de punto flotante.
- js utiliza el formato IEEE754 en donde existe una presicion de 64 bit 
    - lo mayor a representar con presicion seria (2^53) -1 y lo menos (-2^53) -1
    - Debido a que 52 bit se destinan a numeros enteros.
    - 11 bit a numeros de punto flotante. 
    - 1 bit al signo (positivo o negativo). 

***Posee 3 numeros especiales.***
- Infinity: Infinito
- - Infinito: infinito negativo.
- Nan: Not a number, un error de calculo.

***formas de representar un numero.***

```js
 let a =1000000 // de forma comun esto seria 1 millon.

 let b = 1_000_000 // Los Guiones bajos no los nota js.

 let c = 1e6 // indico cuantas veces muevo el 0 hacia la derecha 1_000_000

 let d = 1e-6 // son 6 seros a la izquierda.
``` 

***Problemas debido a la presicion doble de 64bit segun norma ieee754***
- si escribimos numeros tales como 0.1 o 0.2, estos al pasarlos a binarios darian numeros infinitos.
- Por ende al sumarlos daria un error de presicion.
- Soluciónes:
    - Redondear los valores sea
        - toFixed()
        - math.Round()
        - Multiplicarlos por 10.
# BigInt
- Se utiliza cuando debemos representar valor mayores 2^53-1 y menores a -2^53-1
- Es una biblioteca que permite utilizar estos numeros.
- Para utilizar esta biblioteca simplemente agregas una n al final o lo llamas como si fuera un metodo.
- No pueden ser mezclados con numeros comunes, hay que mezclarlos a todos.
- No se le puede aplicar algunos metodos (como math).

```js
let a =Number.MAX_SAFE_INTEGER //9007199254740991 numero mayor que se puede representar con presicion.
let b =Number.MIN_SAFE_INTEGER //-9007199254740991 numero menor que se puede representar con presicion.

let c= 9007199254740991n +9007199254740991n // Aplicando BigInt 18014398509481982n No habra problemas de presicion.

let d =BigInt(a)  // Otra forma de aplicar BigInt

let e=BigInt(c+c) // Si Ambos numeros son BigInt puedo sumarlos tranquilamente 
```


# String

- Secuencia o conjunto de caracteres que generan un texto o un bloque de texto.

- Unicode:
    - Unicode es un estandar universal que nos permite representar cada letra,emoji,signo u simbolo de los idiomas del mundo en un unico codigo.
    - Existen ademas otros estandares segun el pais ojo con lo que haces.

    - UTF
        - Nos permite transcribir estos codigos a el lenguaje de computadoras. 

        - utf-8 :
            - guarda cada letra u simbolo en espacioes de 1 a 4 bytes.
            - Sirve mas para idiomas occidentales.

        - utf-16 :
            - Guarda cada letra u simbolo en espacios de 1 a 2 bytes.
            - Sirve mas para idiomas orientales.

***Formas de representar un string*** 

- Forma comun de js (comillas dobles).
```js
let b =0
let a = "esto es un string normal"+ " "+b // No respeta los espacios Hay que agregar los espacios manualmente +" "+ 
                                         // Para concatenar hay que utilizar el signo + 
                                  
```
- Temple String.

```js
let m =0;

let a = `hola como estas ${m}` // respeta los espacios.
                              // para concatenar se utiliza ${}

```

- Comilla Simples 
    - Es exactamente igual que las comillas dobles.
```js
let b =0
let a = 'esto es un string normal'+ ' '+b // No respeta los espacios Hay que agregar los espacios manualmente +" "+ 
                                         // Para concatenar hay que utilizar el signo + 

```

***Acceder a una parte de un sting y medir su longitud***
- Para medir su longitud utilizo el metodo length.
    - Comienza desde 1.
    - Cuenta el numeros de caracteres que se utiliza.
- Para ingresar a un string puedo utilizar el sistema de corchetes.
    - cada letra tiene su propio indice (comenzando desde 0).

```js
let a =`hola` 

console.log(a.length) // devolveria 4 por que cuenta el numero de caracteres.
console.log(a[0])     // Devolveria la letra `H` por que sus indices empiezan desde 0 

```

***Caracteres Especiales***
- Sirven para poder utilizar simbolos,
- Siempre se utiliza \ dentro de los string.
- Puede utilizar pegada a la palabra o separada.

```js
let a = `HOLA \n a` // tabulacion ( manda hacia abajo la letra a ) 
let b = `HOLA \t a` // un salto de linea.
let c = `HOLA \` a\``// Comillas u otros signos como // / `` "" de esta forma de ponen.
let d = `HOLA \u266` //  Caracter unicode       
```



 # Boolean: 
- Los valor boleanos indican true o false.
- 0 o 1 
    
    
# NaN:
- Nat a Number, cuando no encuentra un resultado, no es un numero valido.


# Undefined: 
-Un valor que lanza js cuando no se retorna nada
- No Encuentra un valor definido

# null:
- Un valor que asignamos cuando intencionalmente cuando no queremos que retorne nada.

# symbol

- Symbol nos permite crear claves unicas en nuestros objetos.
- Nos brinda mayor seguridad.
- Evita colisiones, si 2 simbols poseen la misma clave, seguirian siendo distintas.
- No se pueden acceder mediante bucles, debido a que no son emnumerables.
- Poseen sus propias propiedades y metodos no pueden accederse con las propiedades de objetos normales.

```js
let a  = Symbol()               // Asi se crea un symbol.
let b  = Symbol(`descripcion`) // Se le puede agregar descripciones.

let obj={
    [a]:`valor symbol`         
}                             // Para agregarlo a un obj va entre corchetes.

```
# Como Preguntar que tipo de dato es 

```js
// preguntando el tipo de dato con () es una sintaxis-.
typeof(a);


//preguntando el tipo de dato sin () tbm se puede escribir asi 
typeof b;


// preguntando si 2 tipos de datos son iguales.
typeof a===typeof b;


// preguntando si es de tipo number (CUIDADO COMO ESCRIBIS EL TIPO DE DATO POR QUE PUEDE DAR ERROR )
typeof a =='number';
```
