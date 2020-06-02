/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {
    let fb = [1, 1];
    if (length <= 2) {
      return fb.slice(0, length);
    } else {
        for (i = 0; i < length - 2; i++) {
          fb.push(fb[fb.length - 1] + fb[fb.length - 2]);
      }
    }
    return fb;
}
/**
 * Написать свою функцию map
 */
function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(
      callback(array[i], i)
    );
  }
  return newArr;
}

const array2 = map([1, 32, 4, 34], function (item, index) {
  return item*index;
});
console.log(array2);

/**
 * Написать свою функцию filter
 */
function filter(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(callback(array[i]));
    }
  }
  return newArr;
}

const array3 = filter([1, 34, 5, 11, 4, 15], function(item) {
  if (item > 10) {
    return item;
  }
});
console.log(array3);

/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex = 0) {
  /* if (fromIndex < 0) {
    for (let i = array.length + fromIndex; i < array.length; i++) {
      if (value === array[i]) {
        return i;
      }
    }
  } else if (fromIndex < array.length) {
      for(let n = 0; n < array.length; n++) {
        if (n > fromIndex) {
          return n;
        }
      }
  } return -1; */
  let index = fromIndex < 0 ? array.length + fromIndex : fromIndex;
    for (; index < array.length; index++) {
      if (value === array[index]) {
        return index;
      }
    }
    return -1;
}

const array4 = indexOf(['a', 'b', 'c', 'd', 'e', 'f'], 'f', 6);
console.log(array4);

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {
  let newAcc = null;
  for (let key in array) {
    newAcc += callback(array[key], array[key++]);
  }
  return newAcc + acc;
}

const array5 = reduce([0, 1, 2, 3, 4], function(a, b) {
  return a + b;
}, 7);
console.log(array5);

/**
 * Написать свою функцию find
 */
function find(array, callback) {
  
  for(const key in array) {
    if (callback(array[key])) {
      return array[key];
    }
  }
}

const array6 = find([2, 4, 6, 5, 8, 14, 20, 21], function(a) {
  if (a % 7 === 0) {
    return a;
  }
});
console.log(array6);

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {
  let newArr = [];
  let newNewArr = [...array];
  for (let i = 0; i < newNewArr.length; i++) {
    newArr.push(
      array[callback(array)]
    );
    array.splice(callback(array), 1);
  }
  return newArr;
}

const array7 = sort([5, 301, 6, 22, 32, 7], function (arrayArray) {
  return arrayArray.indexOf(Math.min(...arrayArray));
});
console.log(array7);

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
  const newArr= [];
  for (let key in obj) {
    newArr.push(key);
  }
  return newArr;
}

/**
 * Написать свою функцию Object.values
 */
function objectValues(obj) {
  const newArr= [];
  for (let key in obj) {
    newArr.push(obj[key]);
  }
  return newArr;
}