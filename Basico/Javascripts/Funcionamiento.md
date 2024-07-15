# Javascrypt

***Como Esta formado***

-  js es un lenguaje de alto nivel,interpretado,no tipado y dinamico basado en prototipos
- alto nivel: los lenguajes de alto nivel se refieren a que estan mas cerca del lenguaje humano y mas lejos del lenguaje de maquina 
-Interpretado:
    - los navegadores web poseen un motor que interpreta js en caso de chrome es v8.
        - el navegador carga el codigo js.
        - lo va ejecutando linea por linea. 
- no tipado : 
    - las variables declaras pueden cambiar su tipo de dato durante la ejecucion de un programa, esto lo hace mas propenso a errores pero tbm mas flexible. 
    - no hace falta declarar un tipo de dato  a una variable antes de usarla.
- dinamico: Los tipos de datos de las variables pueden cambiar durante su ejecucion es decir no tienen un tipo de dato explicito.

- Basado en prototipos:
    - utiliza un sistema de  herencia basado en  prototipos, en donde un objeto puede heredar las propiedras y metodos de otro objeto a travez de su prototipo.

# Como Funciona

 - Js es single thread y sincronico 
    - single thread : posee un hilo unico de  ejecución, es decir realiza un proceso a la vez.
    - sincronico: va en cierto orden, de manera secuencial, linea por linea. 

*** Syntax Parser ***
- Cuando se ejecuta js, el interprete inicia el syntax parser, este se encarga de leer el codigo y revisar si contiene algun error de sintaxis, mientras va parseando los datos  y convirtiendolo en (AST) Abstract Syntax Tree, una sintaxis de arbol abstracta.
- ademas se encarga de interpretar como se relaciona todo el codigo.
- Si no se encuentra errores se inicia el ( lexical Enviroment ).

***Lexical Enviroment***
- Es un objeto enorme, este depende de donde lo este ejecutando.
- El lexical enviroment recorre el codigo linea por linea buscando variables declaradas con var y funciones, las cuales se guardan en memoria. 
- Guarda todo en par clave valor (key:value).

***Execution context***

- Cuando el lexical enviroment termina de analizar donde se encuentran las variables declaras con var y las fn, se abre un contexto  de ejecucion global.
- se les va asignando valores a las variables, y comienza a observar donde hay una invocacion o llamada a fn.
- Si existe una llamada a fn vuelve a repetir el proceso, el primer proceso espera a que termine los otros.
- podriamos decir que se va generando una pila de ejecución.
- En caso de que se encuentre una variable sin declarar dentro de un contexto el ( outter enviroment ) sale de ese contexto hacia el superior  y se fija si existe alguna variable que contenga esta.

# Execution Stacks

- Esto se refiere a como se va ejecutando el codigo cuando existen varias llamadas a funciones.
- A medida que va avanzando el codigo, con varios llamadas a fn, se va generando una pila de ejecucion, en donde cuando se termine el ultimo proceso, se iran terminando los procesos hasta llegar al primero que se genero. 

- Como se genera:
    - Poseemos la fn nombre que retorna la invocacion a fn apellido. 
    - esta funcion  apellido posee una fn en su interior y la retorna. 


    fn nombre (){
        - se inicializa su execucion y retorna la invocacion de appelido
        - Se habe un nuevo contexto.
        - fn apellido(){
            - retorna la fn Completo se abre un nuevo contexto
            - Fn completo(){
                esta fn retorna el nombre completo.
                y se cierra este contexto.
            }

            - Se termino el contexto de completo.
            - Retorno Rodrigo moyano.
            - Se cierra este contexto.
        }
        - Se termino el contexto de apellido.
        - retorna rodrigo moyano
        - ES EL VALOR DE RETORNO DE NOMBRE.
        - SE TERMINA TODO EL CONTEXTO.
    }; 
```js
function nombre(){
    return apellido();
};
function apellido(){
     function Completo(){
        return `Rodrigo Moyano`;
    }
    return Completo()
}


console.log(nombre())
```
# Scoope
- en principio el lexical busca todas las variables declaradas con var y las fn.
- luego el execution asigna sus valores.    
    - saludo: `Hello`
    - fn: saludo()
    - fn: saludo1()
    - Hay una invocacion a fn se abre un nuevo contexto.
        - En este nuevo contexto no existe saludo por ende el outter busca en un contexto superior (en este caso es el 
        - Como el valor de global es `Hello`retorna este valor.
    - Luego saludo se  le reasigna otro valor `Chau`
    - Se encuentra otra invocacion saludo1()
        - En este contexto saludo  se reasigna otro valor, como no existe una variable saludo dentro del contexto de esta funcion el outter sale y reasigna la que se llame asi. 
        - Saludo queda con el valor `Hola`
```js
var saludo=`Hello`;

function saludo(){
    return saludo;
};
console.log(saludo());// La fn busca saludo en un contexto superior y retorna Hello.

saludo=`chau`;

console.log(saludo) // se reasigna saludo `Chau`

function saludo1(){
    saludo=`Hola`;
    return saludo 
}
console.log(saludo1())//Retorna `Hola`por que existe un saludo en este contexto.
console.log(saludo)   // saludo al existir en el contexto global se reasigno. su valor es `Hola`
```
# Hoisting
***Que Es***
- Es la particularidad que posee js de tender a subir las variables hacia un nivel superior.

***Como Funciona***
- En Principio el lexical enviroment busca las variables y fn declaradas y las guarda en par key:Value.
    - sal:undefined.
    - saludo: fn(){}
- Luego en la execution context asigna los valores y pasan 2 cosas.
    - la funcion se ejecuta es decir abre un nuevo contexto y repite el proceso por ende esta si obtendra su valor.
    - Js al ser sincronico lee linea por linea y  como se esta inicializando la variable antes de que  se le pueda asignar un valor esta devolvera undefined.
```js
saludo(); // Devuelve el valor
console.log(sal); // Defuelve undefined.

 function saludo(){
    return `Hola`;
};

var sal=`salada`;
```
# Statements
- Son declaraciones que generan una accion y forman bloques de codigo 
- controlan el flujo y definen estructuras de codigo. 
- Tenemos :
    - Declaramos una fn.
    - Declaramos un flujo  de codigo (if,switch).
    - Declaramos una variable.
    - Declaramos una clase.

# Expresiones
- Pueden formar parte de las staments.
- Producen un valor
- tenemos:
    - literales, producen un valor directo.
    - Operaciones aritmeticas.
    - llamada a funcion. 

# Valor y referencia
- Podemos asignar valores por valor o referencia.
- Por Valor:
    - No Toman en Cuentan los cambios que se generan, ya que js en sincronico(lee linea por linea)
    - Esto se aplica a los valores primitivos, ya que estos se aplican generando copias de los mismos. 
```js
let a =5;
let b=6
let c=9 

a=c // Aqui a toma el valor de 9

c=10 // a seguiria siendo 9 aunque c haya cambiado mas adelante.
```
- Por Referencia:
    - Cuando asignamos valores por referencia, Esta mirando a un espacio de memoria concreto
    - Si se enteraria de los cambios que se generarian en ese espacio de memoria
    - Esto se aplica en. 
        - Funciones
        - Objetos
        - Arrays. 

# Tipo de errores.

- Error de sintaxis
    - Existe algun error en la sintaxis del codigo.

- Error semantico
    - Existe algun error en los bucles o en el funcionamiento.

- Error de programacion
    - Cuando no hace lo que quiero que haga.

***Cuando se muestra el error***
-  Cuando es un error de sintaxis o semantico el syntax parser te avisa.
-  Cuando es un error de programacion se muestra cuando se ejecuta el codigo.

# Manejo de Errores.
- Nosotros debemos manejar de alguna manera las excepciones.
- Una excepcion es cuando se genera algo inesperado o algo que interrumpe el  flujo normal del codigo.
- Si es un error nativo de js el bloque catch lo tomaria automaticamente.
- Para errores personalizados utilizamos throw.
    - Throw 
        - Es como un return que corta toda ejecucion.
        - Throw es una statement que nos permite atrapar un error en el flujo, Sin importar  en que contexto.
        - Throw siempre busca un catch ya sea subiendo o bajando los contextos, si no lo encuentra muesta el error en consola.

        - Puede lanzar cualquier tipo de valor (texto, null, undefined), 
            - Buenas Practicas:
                - Lance un objeto hecho manualmente
                - Que trabaje en conjunto con Error o instancias de error x que nos proporcionan mas datos.
                - Error es un objeto que posee varias propiedades y metodos:
                    - error.name : Nombre del error.
                    - Error.message: es el mensaje que mandamos.
                    - Error.stack: es la informacion  que nos va mostrando donde paso el error.
- 2 Formas de hacerlo.
    -Try Catch
        - try:
            - Aqui va la parte del codigo que se ejecutara.
            - Si se encuentra una error, se corta la ejecucion y salta al catch.
        - Catch:
            - Si se genera algun error o un valor no esperado, catch tomara este error.
            - Se ejecutara lo que este dentro de este bloque de codigo
            - El tipo de dato que recibe, dependera del tipo de dato que utilice para ejecutar la excepcion.
- Ejemplo:
    - Declarar la fn fuera del bloque:
        - Al declarar la fn fuera del bloque esta perteneceria al contexto global lo que permitira:
            - Reutilizarla.
            - Mantener un condigo limpio.
            - UTILIZAR  ESTA SIEMPRE.
    - Declarar la fn fuera:
        - Solo pertenecera al contexto de try catch
```js
function edad(){
    if (a>0){
        throw new Error(`Aqui Sucedio un error`)  // Declaro la fn fuera del try catch y la ejecuto dentro del try.
    }
}

try{
    edad()

}catch(error){
     console.log(error.message)
}finally{
    //Esto se ejecuta haya error o no. 
}


try{
    function edad(){
    if (a>0){
        throw new Error(`Aqui Sucedio un error`)  // Declaro la fn dentro del try y la ejecuto en el mismo contexto.
    }
}
    edad()
}catch(error){
     console.log(error.message)
};
```
*** Manejar con Cb errores***
        
- Existe otra forma de manejar errores,A travez de una callbacks.
- Esta forma es antigua se utilizaba para manejar al asincronismo.
```js
function Nombre(nombre,apellido,cb){
    if(typeof nombre!==`string`){
        let error=new Error(`Nombre Invalido`);
       return cb(error,null);
    }else{
        result={
            nombre:nombre,
            apellido:apellido
        };
       return cb(null,result);
    }
};  

function cb(error,result){
    if(error) console.log(`Se Produjo un error, ${error.message}`);
    if(result) console.log(result)
}
```

# Tipo De Operadores

-   En Js existen distrintos tipos de operadores.

1. Suma,Resta Multiplicacion Division +, -, /, *
2. Racionales  mayor, menor, mayor o igual, menor o igual <, >, <=, >=
3. Potenciacion  2**2  2^2
4. Es igual Sin importal el tipo de dato 2==2
5. es estrictamente igual (importa el tipo de dato)  2===2
6. Desigualdad estrica(importa el tipo de dato) !==
7. Incremento, Decremento i+=, i-=, i*=, i/=
8. Incremento, Decremento de 1  i++, i-- 
9. Logicos  ||(or), &&(y), !(negación), !!(doble negación)
10. Modulo %
11. Operador Unario intenta convertir un tipo de dato a numero (puede ser + o menos para negarlo).
```js
    let str=`123`;
    let bolean=true;
    console.log(+str); // retorna 123 en tipo number.
    console.log(+bolean) // retorna 1 por que los booleanos son 1 o 0.
    console.log(-str) // retorna -123
    console.log(-bolean) //retorna -1
```
12. Operador Ternario.
- El operador terniario evalua dos condiciones y retorna la que sea true.
- Si no es la primera condicion entonces devolvera la segunda. 
- tiene un return explicito. 
- Tbm podemos realizar ternarios anidados. 


```js
let x=1,

console.log(x>1? `hola`:`chau`); // retorna chau  por que no cumple  la condicion.

let x=`1`;,
console.log(x>1? `hola`:x===1?`Es uno`:`No es nada` ); // Esto es un ternario anidado.
```
13. Operador de coma.
- Te permite realizar o retornar multiples operaciones de izquierda a derecha.

14. Nullish  ??
- Te permite devolver otro valor en caso de que el primer operando es null o undefined.
- Retonar cualquier tipo o estructura de datos.
    - obj.
    - str.
    - number
    - array.
    - funciones.
- Si se quiere utilizar logica completa debemos utilizar otro bucle o una fn que envuelta esta logica.
- Si utilizamos una fn debe ser una autoinvocada. 
```js
let result= null??[1,2,3,]

console.log(result);  //En este caso retornaria el operando de la derecha por que el otro es null.
------------------------
let valor=null

let result=valor??function (){
    return (`es null hacemos otra cosa `)
}();


console.log(result);
```
15. Encadenamiento Opcional ?.
-  Te permite acceder a array,obj, metodos sin que se genere un error en caso de que alguna prop sea null o undefined.
- Retona undefined.


# Procedencia de operadores.
- todos los lenguajes tienen su forma de aplicar aritmetica, debido a su precedencia de operadores 
- Tabla de mayor precedencia hacia menor.

    1. (...)  parentesis                        
    2.   .   (Dot Notacion).                 ||   la izquierda.
    3.  [..] (Break Notacion).               ||   la izquierda.
    4.  new  (todos los argumentos)          ||   la izquierda.
    5. (..)  (llamada a fn)                  ||   la izquirda.
    6. ?     (encadenamiento de los if)      ||   la izquierda.
    7. New   (todos los argumentos)          ||   la derecha.
    8. ..++    (Incremento )              
    9. ..--    (decremento)
    10.  !      (negacion)                   ||   la derecha.
    11. (+)     (suma)                       ||   la derecha.
    12. (-)      (resta)                     ||   la derecha,
    13. ..++    (Incremento)                 ||   la derecha.
    14. ..--    (decremento)                 ||   la derecha.
    15. **      (potencia)                   ||   la derecha
    16. (*)       (multiplicacion)           ||   la izqueirda
    17. /       (division)                   ||   la izqueirda
    18. %      (resto)                       ||   la izqueirda
    19. (+)       (suma)                     ||   la izqueirda
    20. (- )      (resta)                    ||   la izquierda.
    21. (> )       (menor)                   ||   la izquierda.
    22. (>=)      (menor o igual)            ||   la izquierda.
    23. <       (mayor)                      ||   la izquierda.
    24. <=      (mayor o igual)              ||   la izquierda.
    25. ==      (igual)                      ||   la izquierda.
    26. !=      (desigual)                   ||   la izquierda.
    27. ===     (igualdad estricta)          ||   la izquierda.
    28.  !==     (desigualdad estricta)      ||   la izquierda.
    29. &&      (operador y)                 ||   la izquierda.
    30. ||      (operador or)                ||   la izquierda.
    21. ?..:    (ternarios)                  ||   la izquierda.

# Coercion De Datos
- Es la forma en que js convierte los tipos de datos para poder manejarlos.
    - Coercion implicita 
        - Cuando js lo hace automaticamente.
```js
console.log(`a`+1) // Convierte en string el numero
console.log(1+`a`) // Convierte en string el numero
console.log(1 *`a`) // Nan No puede realizar esta operacion.
console.log(`a`*1)  // NaN no puede realizar esta operacion.
console.log(1/`a`)  // Nan No puede realizar esta operación.
console.log(`a`/1) // NaN no puede realizar esta operación.
console.log(1-`a`) // Nan no puede realizar la operacion.
console.log(`a`-1)// NaN no puede realizar la Operación.


console.log(1+`1`) // Los concatena.
console.log(`1`+1) // Los concatena.
console.log(1*`2`) // Si el string es numero lo conviernte en numero.
console.log(`1`*2) // Si el string es numerico lo convierte en numero.
console.log(2/`2`) // Si el estrin es numero lo convierte en numero.
console.log(`2`/2) // Si el string es numero lo convierte en numero.
console.log(1-`2`)// Si el string es numero lo convierte en numero.
console.log(`2`-1) // Si el estring es numerico lo convierte en numero.

console.log(true*4)  // Si se puede realizar la operación.
console.log(false*5) // Si se puede realizar la operación.
console.log(true/4) // Si se puede realizar la operación.
console.log(false/3)// Si se puede realizar la operación.



console.log(true+false) // Como son 1 y 0 Pueden sumarse.
console.log(true+1)  // Como true es 1 si puede realizar las suma.
console.log(`a`+true) // los concatena.
console.log(false+`a`) // Los concatena.
```
    - Coercion explicita
        - Cuando lo hacemos de manera manual
        - Por ejemplo utilizando metodos.

# true, truty y false, falsy

- true y false son valores booleanos que representan verdad y falsedad.

- truty : Cuando algo se considera verdadero aunque no sea especificamente true. 
    - fn.
    - array.
    - obj.
    - string no vacios.
    - Numeros distintos de 0.

- falsy: Cuando algo  se considera Falso aunque no sea especificamente false.
    - 0.
    - string vacios.
    - false.
    - null.
    - undefined .
    - NaN.

# Destructuting y spreed operator(Rest y Spreed).

***Spreed***
    - Lo que  realiza el spreed es una copia de un objeto iterable. 
    - Realiza una nueva copia que se encuentra en el heap, sin embargo ssi este tiene referencias a otros obj dentro, apuntan al mismo obj en memoria.
```js
let arr = [1, 2, 3]

let copyArr = [...arr]

console.log(copyArr);   // En este caso realiza una copia completa de los primitivos.[1,2,3]

let copyArrObj = { ...arr }

console.log(copyArrObj) // Si Utilizara un obj para realizar la copia sus key serian los indices del array.
//{0:1, 1:2, 2:3}

let arrWhitObj = [1, 2, 3, { 0: `b` }];

let copyArrWhitObj = [...arrWhitObj]

console.log(copyArrWhitObj);    // En este caso al tener un obj dentro del array comparten la misma referencia a ese obj.
// Si yo cambiara el valor de ese obj. cambiaria el valor de la prop del obj en la copia.
// [1,2,3,{0:`b`}]
arrWhitObj[3][0] = `a`

console.log(arrWhitObj)  // retorna [1,2,3,{0:`a`}]


console.log(copyArrWhitObj) //[1,2,3,{0:`a`}];


let arrSpreed = [1, 2, 3, 4];
let arrSpreed3 = [1, 2, 3, 4];
let arrSpreed2 = [5, 6, 7];
let arrSpreedWhitUnd = [1, 2, 3, , 4]


let arrSpreedResult = [...arrSpreed, ...arrSpreed2]

console.log(arrSpreedResult) // Al realizar una copia superficial de ambos dentro de un array los une.

let arrNotPlane = [...arrSpreed, arrSpreed2,7,8]

console.log(arrNotPlane) // retornaria [1,2,3,4,[5,6,7]] Por que no estoy realizando una copia del segundo array.
                         // Tbm puedo agregar elementos.

let arrSpreedResult2 = [...arrSpreed, ...arrSpreed3];

console.log(arrSpreedResult2)  // Aunque contengan valores iguales, estos son elementos distintos.
// [1,2,3,4,1,2,3,4];


let str = `Hola`;
let str2 = `Bien`;

let copyStr = [...str, ...str2,4,5]; // En Caso de string, realiza un array con cada caracter.
                                 // [H,o,l,a,B,i,e,n]
                                 // Tbm se agregan elementos.

console.log(copyStr)

let copyStriInObj={...str,...str2}

console.log(copyStriInObj) // {0:B, 1:i, 2:e, 3:n} 
                            // Como toma cada indice del string como key estos se sobreescriben.

let obj ={
    a:1,
    b:2,
    c:3
};

let copyObj={
    a:4,
    b:5,
    c:6,
};

let spreedObj={...obj,...copyObj};

console.log(spreedObj)  // Retona { a: 4, b:5, c:6 }
                        // Debido a que las key son las mismas se sobreescriben con el ultimo obj


let spreedObjWhitObj={...obj,copyObj}

console.log(spreedObjWhitObj) // { a: 1, b:3, c:4, copy:Obj:{a:4,b:5,c:6, } }
                              // Cuando agregamos un objeto sin realizar spreed toma le nombre del mismo como prop.

let spreedObjWhitObj2={...obj,copyObj,h:`a`}

console.log(spreedObjWhitObj2) // Solo puedo agrgar otros datos siguiendo la sintaaxis de los obj.
                                // { a:1, b:2, c:3 , copyObj:{a:4,b:5,c:6}, h:4}
```

***Rest***
    - El parametro rest en funciones son argumentos ilimitados que podemos agregarle a una fn
    - Se presentan como si fuera una array. 
    - Funciona para cualquier forma de declaracion de fn.

```js
function suma(a,b,...c){
    let acc=a+b;

   c.forEach(ele=>{
        acc+=ele
    })

    return acc
};
console.log(suma(1,1,2,6))

let resta=function(a,b,...c){
    let acc=a-b;
    c.forEach(ele=>{
        acc+=ele
    });

    return acc;
};
console.log(resta(3,1,2,6,4))

let multi=(a,b,...c)=>{
    let acc=a*b;

    c.forEach(ele=>{
        acc+=ele
    });

    return acc;
};

console.log(multi(1,2,3))
```
***Destructuring***

- El destructuring nos permite extraer valores de arreglo y objetos.
- Nos permite trabajar facilmente con estructuras de datos complejos.

***Arrays*** 

- Podemos asignar un elemento o propiedad a una variable.
- Podemos Saltar elementos en el destructuring para tomar el valor deseado.
- Podemos asignarle valores por defecto.
```js
let arr=[1,2,3]

let [a,b,c]=arr;

console.log(a); // retorna 1
console.log(b); // retorna 2
console.log(c); // retorna 3
--------------------------------
let arr=[1,2,3]

let [a,,c]=arr;
console.log(a) //Retorna 1
console.log(c) //Retorna 3
-------------------------------
let arr=[1];

let [a,b=2,c=3]=arr;

console.log(a); //retorna 1
console.log(b); //retorna 2 que es un valor por defecto.
console.log(c); //retorna 3 que es un valor por defecto.
   
```
**funciones**
- Se puede desestructurar el valor de retorno, argumentos y dentro de la fn.
```js
function pruebaArr(){
    return [1,2,3];
};

let [a,b,c]=pruebaArr()

console.log(a);
console.log(b);
console.log(c);

function pruebaObj(){
    return {aa:1,bb:2,cc:3};
};

let {aa,bb,cc}=pruebaObj();

console.log(aa); //retorna 1
console.log(bb); //retorna 2
console.log(cc); //retorna 3
```
***En Objetos*** 
- Para realizarla en obj la variable y el nombre de la propiedad deben tener el mismo nombre.
- Podemos  asignarle alias a cada propiedad para acceder a sus valores. 
    - Si utilizo alias no puedo volver a utilizar los nombres de las propiedades a no ser que utilice otra destructuracion distinta, con los nombres de las propiedades. 
- Tambien podemos utilizar destructuracion por defecto. 


```js
let obj={
    name:`a`,
    apellido:`b`
}

let des={name,apellido}=obj;
console.log(name); //retorna name.
console.log(apellido) //retorna apellido.
--------------

let obj={
    name:`A`,
    apellido:`b`
};

let {name:nombre,apellido:lastname}=obj;

console.log(nombre) //retorna A
console.log(lastname);//retorna b
```

# Herencia de Objetos Basado En Prototipos

- Basicamente todas las estructuras de datos de js son un objetos. 
- Los datos primitivos en si no son objetos pero para que js pueda aplicar sus propiedades y metodos se envuelven en un obj temporal.
- Todas las demas estructuras de datos son objetos.
    - Array.
    - Objetos literales.
    - funciones.
    - Regex.
    - Map.
    - Set.
    - Date.

- Como js Posee un sistema de herencia basada en prototipos todos estos objetos poseen metodos y propiedades.
- Para agregar funciones al prototipo de algun objeto se utiliza:
```js
  let array=[1,2,3,4,5];
  
 array.prototype.sum=function (){
        return this.reduce()=>
 }
``` 

# Funciones Constructoras y Function Clase.
- Estas funciones se agregaron por marketing, es decir, para que sea mas comodo para los que vienen de codear con otros lenguajes.
- Estas funciones se utilizan para crear objetos que seran repetitivos.
- Las funciones constructoras o funciones de clase son como plantillas que vamos a utilizar para crear objetos.
- Las funciones constructoras siempre van La primera sigla con mayuscula.
- Las funciones constructoras pueden retornar 2 cosas 
    - Retornar un objeto que ponemos manualmente.
    - Retornar  la nueva instancia que creamos.

***New y This***

```js
function Persona(){
    this.name=`Raul`,
    this.apellido=`Mendez`
};

let Nuevo=new Persona();
```
- New:
    - New es un operador que se utiliza para crear instancias de objetos.
    - Como funciona:
        - Crea un objeto vacio.
        - Bindea este objeto y la fn constructora
        - como el this ahora pertenece al contexto del objeto nuevo hace referencia al mismo.
```js
function Persona(nombre,apellido){
    this.name=nombre;
    this.apellido=apellido;
}

const nuevo=new Persona('Raul' 'Ricardo')  // Aqui estamos creando una nueva instancia de la fn constructora.

function Animal(raza,años){
    this.raza=raza;
    this.años=años;

    return {messaje:'existe un nuevo perro'}; // Aqui esta retornando un objeto.
}
```


- This:
    - This hace referencia al contexto en el que lo llaman.
    - El valor del mismo depende de como y donde lo llaman.
```js
function(nombre){    // En este caso this esta refiriendose al contexto global.
    return this     
}

function Persona(nombre){
    this.nombre=nombre
}

const nuevaPersona=new Persona('Juan') // En Este caso this hace referencia a la  nueva instancia de la fn constructora.

let obj{
    name='Rodrigo',
    apellido='Moyano',
    completo= function(){
        return `${this.name} ${this.apellido}`
    }
}

obj.completo(); // Como this esta dentro del contexto del obj hace referencia a sus propiedades.
```

***Funciones de clase***
    - Las funciones de clase se agregaron en ES6, es  otra forma de plantear las fn constructoras.
    - Partes:
        - Class: Es para inicializar una clase
        - Constructor:
            - Se ejecuta automaticamente cuando se crea una instancia
            - Sirve para pasar propiedades a las instancias de objetos a travez de argumentos.
            - Si no colocamos un constructor, js automaticamente crea uno pero no pasara propiedades.
        - Metodos:
            - Son las funciones que se pasan a una clase. 

```js
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    saludar(){
        return `hola soy ${this.nombre} ${this.apellido}`;
    }
}

const Persona1=new Persona(`Ricardo` `Arjona`);

console.log(Persona1);
console.log(Persona1.saludar());
```
***Extends y Super***
- Permite heradar a una clase las propiedades de otra clase.
- Se utilizan Para tener un codigo mas organizado.
- basicamente se crearia una subclase de la superclase(clase padre).
- Extends: Es la palabra clave para que crear una clase que herede las prop de otra clase.
- Super: Es necesario invocar este metodo en el constructor para que pueda tomar las propiedades de la superClase.
    - Podemos apreciar 2 casos.

```js
class Persona(){
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    metodo(){
        return `Hola,${nombre} ${apellido}`;
    };
}

class Empleados extends Persona(){
    constructor(nombre,apellido,activo){
        super(nombre,apellido);
        this.activo=activo;      // Que Utilicemos los argumentos de nuesta superClase.
    }
}

class Despedido extends Persona (){

    constructor(activo){
        super()
        this.activo=activo;
    };
};                          // Que no necesitemos los argumentos de nuestra superClase.
```
# CallBacks
- Las callbacks son funciones que pasan como argumentos otras fn.
- Estas fn se ejecutan despues de que se genere alguna accion.
- Generalmente se utiliza para realizar codigo de forma asincrona.
    - Leer Archivos.
    - Solicitudes HTTP
    - Eventos.







