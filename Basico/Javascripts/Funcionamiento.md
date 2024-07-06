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
    - utiliza un sistema de  herencia basado en  prototipos, en donde un objeto puede heredar las propiedras y metodos de otro objeto a travez de su prototipo


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
- En caso de que se encuentre una variable sin declarar dentro de un contexto el ( outter enviroment ) sale de ese contexto hacia el superior  y se fija si existe alguna variable que contenga esta
     
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


# Execution Stack
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

# CallBacks




