let x = `1`,
    y = 2,
    z = 3

// console.log(x) //retorna 1  
// console.log(y) //retorna 2
// console.log(z) //retorna 3
// console.log(x,y,z) // retorna [1,2,3]






function Persona(nombre,age){
    this.name=nombre;
    this.age=age;
};

Persona.prototype.lastName=`rayos`;


let ricardo=new Persona(`rodrigo`,`28`);

// console.log(ricardo);
// console.log(ricardo.lastName)

// for (const key in ricardo) {
//     console.log(key);
// };  // En este caso retornaria name agre y lastname por que aunque este  en el prototipo de el obj sigue siendo una propiedad.




                                                



