/*
Contador de repeticiones:

Crea una función que nos devuelva el número de veces que se repite 
cada una de las palabras que lo conforma.

Puedes usar este array para probar tu función:
*/
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(param) {
  const wordCount = {};

  param.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  return wordCount;
}

console.log(repeatCounter(counterWords));