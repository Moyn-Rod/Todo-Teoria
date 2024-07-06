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
# Hoisting

# Statements

# Expresiones

# Valor y referencia

