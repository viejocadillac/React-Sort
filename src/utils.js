/* eslint-disable no-plusplus */
const swap = (array, a, b) => {
  const arr = [].concat(array);
  const auxB = arr[b];
  arr[b] = arr[a];
  arr[a] = auxB;
  return arr;
};

/**
 * Genera un array de numeros alaeatorios
 * @param {number} length Tamaño del array a generar
 * @param {number} max Valor maximo de los numeros aleatorios
 * @returns {number[]} Array con valores aleatorios
 */
const arrayFillRandom = (length, max) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max) + 1);
  }
  return arr;
};

const sleep = (milis) => new Promise((resolve) => setTimeout(resolve, milis));

export { swap, arrayFillRandom, sleep };
