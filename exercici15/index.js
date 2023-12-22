/* Crea una función llamada swap que reciba un array y dos parametros que sean 
indices del array. La función deberá intercambiar la posición de los valores de 
los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array: */

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]

const swap = (arr, par1, par2) => {
  const cont = arr[par1]
  arr[par1] = arr[par2]
  arr[par2] = cont

  return arr
}

console.log(swap(fantasticFour, 0, 3))
