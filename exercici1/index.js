/* Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros. */

/* 1.1 Ejecuta esta función sin pasar ningún parametro;
1.2 Ejecuta esta función pasando un solo parametro
1.3 Ejecuta esta función pasando dos parametros */

let a = 10
let b = 5
const arrowFunction = (a, b) => {
  console.log(a + b)
}

// 1.1 Ejecuta la función sin pasar ningún parámetro (usará los valores por defecto)
console.log(arrowFunction())

// 1.2 Ejecuta la función pasando un solo parámetro (usará el valor por defecto para el otro parámetro)
console.log(arrowFunction(a))

// 1.3 Ejecuta la función pasando dos parámetros
console.log(arrowFunction(a, b))
