
let arr = [1, 2];

let obj={};
let metodo=arr.every((ele, ind) => {
  if (ele > 0) {
   return obj[ind]=ele // Debes retornar true para que every siga iterando
  }
  return false; // O retornar false si la condición no se cumple
});

console.log(metodo);