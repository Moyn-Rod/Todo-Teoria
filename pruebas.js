let x = `1`,
    y = 2,
    z = 3

// console.log(x) //retorna 1  
// console.log(y) //retorna 2
// console.log(z) //retorna 3
// console.log(x,y,z) // retorna [1,2,3]





let arr=[[1,5,[11,12]],[2,6],[3,7,9]];

let obj={
    name:`a`,
    lastname:`b`
};
for (const i of arr) {
    console.log(i); //  si yo no hago destructuring me devolveria cada elemento del primer array.
};

for (const [i] of arr) {
    console.log(i); // Al hacer destructuring estoy desestructurando cada sub-array y devolviendo 
                    //el primer  elemento  de   los mismos.
};

for (const [i,j] of arr) {
    console.log(i,j); //  si yo agrego mas variables cada variable estara tomando el segundo valor de  cada
                     // subarray, y asi sucesivamente.
};




// for( [key,value] of Object.entries(obj)){
//     console.log(`key:${key} \n value:${value}`);
// };

