# Variables
- Las variables nos permiten almacenar el valor de algo para utilizarlo luego.
- Todo se puede almacenar en una variable.
    - Arrays.
    - Objetos.
    - numeros.
    - Caracteres.
- Asignamos un valor a la variable.
- invocamos la variable(se invoca escribiendo el nombre de la variable).
- las variables se sobreescribien por no ser un lenguaje flexible, no tipado.
- Podemos declarar variables unicamente con solo 1 palabra clave .
```js
    var esto='hay',
        tambien='que',
        son= 'desayunar',
        variables = 'ahora';   

```

```js
      var                  ejemplo            =            9
//Palabra clave    Nombre de la variable    asignacion    valor de la variable

    var nombreVariable =9;
```
*** Que pasa si hacemos una variable sin palabra clave.***

- Existen 3 Keywoards para nombrar variables.

    - Var
        - En principio solamente se utilizaba var para declarar variables.
        - Poseen scoope Global y de funcion, esto quiere decir que si se encuentra declarada dentro de una funcion el alcance de esa variable sera de la fn. 
        -  Poseen hoisting(ya visto en funcionamiento.md), eleva las variables y las funciones creando inconvenientes.
```js
var namet = `rodrigo`;  //declaramos la variable como rodrigo.

console.log(namet);  // retorna rodrigo.

function prueba(){          //declaramos esta funcion.
    console.log(namet);     // como no hay variable namet declaradas dentro de este scoope el outter busca en un 
                            // conxteto anterior.
    return;
};

prueba();

function names() {
    console.log(namet);   // Cuando se abre este contexto. se encuentra con una variable namet que lo posicion en princio
    var namet = `nicolas`;//del contexto hasta el momento es undefined hasta que  pase al phase execution
    console.log(namet);   // cuando pasa a la fase de ejecución se encuentra con un console.log de namet pero name no
    return;               // posee todavia valor. entonces retorna undefined luego posee el valor nicolas y finalmente lo
};                         //retorna 
names();

if (namet) {
    console.log(namet);    // En este caso como las variables con var no poseen scoope de bloque  el primer  console.log
    namet = `otro nombre`;// retornaria Rodrigo
    console.log(namet);   // luego se sobreescribiria.
};

console.log(namet);    // finalmente queda sobreescrita.
```
    - Let:
        - Las variables declaradas con let 
    - Const