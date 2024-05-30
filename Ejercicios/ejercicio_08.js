/*
Buscar la palabra más larga 

Completa la función que tomando un array de strings como argumento devuelva 
el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longestWord = param[0];

  for(let i=0; i< param.length; i++) {
    if(avengers[i].length > longestWord.length) {
      longestWord = avengers[i];
    }
  }

  return longestWord;
}

console.log('La palabra más larga es:', findLongestWord(avengers));