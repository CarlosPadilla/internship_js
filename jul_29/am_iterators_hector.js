function forEach(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

function map(callback, arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(callback(arr[i], i, arr));
  }
  return resultArray;
}

function filter(callback, arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

function reduce(callback, arr, init) {
  let result = (typeof init !== 'undefined' && init !== null) ? init : arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 || result !== arr[0]) {
      result = callback(result, arr[i], i, arr);
    }
  }
  return result;
}

function reduceRight(callback, arr, init) {
  let result = (typeof init !== 'undefined' && init !== null) ? init : arr[arr.length - 1];

  for (let i = (arr.length - 1); i >= 0; i--) {
    if (i !== (arr.length - 1) || result !== arr[arr.length - 1]) {
      result = callback(result, arr[i], i, arr);
    }
  }
  
  return result;
}

// const arr = [1, 2, 3];
// forEach((elem, index, a) => {
//   console.log(elem, index, a);
// }, arr);
// console.log(map((elem, index) => elem * index, arr));
// console.log(filter((elem, index) => elem > index, arr));
// console.log(reduce((acc, cur) => acc + cur, arr));
// console.log(reduceRight((acc, cur) => acc - cur, arr));

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  reduceRight
};