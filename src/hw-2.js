/**
 * Напишите логику, которая умножает все числовые свойства объекта obj на переменную num.
 */
function task1(num) {
  const obj = {
    name: 'Valera',
    age: 20,
    height: 300,
    weight: 30,
    surname: 'Trololo',
  };
  // ваш код должен быть ниже этой строки
  for (const key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] = num * obj[key];
    }
  }
  // ваш код должен быть выше этой строки
  return obj;
}

/**
 * Напишите код для суммирования всех значений из obj и сохраните результат в переменной sum.
 */
function task2(num) {
  let sum = null;
  const obj = {
    a: 20,
    b: 10,
    c: 50,
    d: 1,
    e: 5,
  };
  // ваш код должен быть ниже этой строки
  for (const key in obj) {
    sum += obj[key];
  }
  // ваш код должен быть выше этой строки
  return sum;
}

/**
 * Напишите код для проверки на существование свойства в объекте. Если свойство property существует в obj,
 * то функция должна возвращать true, в противном случаи false
 */
function task3(obj, property) {
  let result = null;
  // ваш код должен быть ниже этой строки
  obj = {};
  result = obj.hasOwnProperty('property');
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Написать логику, что скопирует все свойства из obj в result.
 */
function task4(obj) {
  let result = {};
  // ваш код должен быть ниже этой строки
  obj = {
    a: 1,
    b: 2,
  };
  result = Object.assign({}, obj);
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Ваша реализацимя должна проверить в каком объекте obj1 или obj2 свойств больше, в переменную result
 * положите 1 или 2 в зависимости в каком объекте свойств больше
 */
function task5(obj1, obj2) {
  let result = null;
  // ваш код должен быть ниже этой строки
  obj1 = {
    a: 1,
    b: 2,
  }
  obj2 = {
    a: 1,
  }
  let count = 0;
  for (let key in obj1) {
    count++;
}
  let check = 0;
  for (let key in obj2) {
    check++;
  }
  count > check ? result = 1 : result = 2;
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Написать логику, которая должна удалять все свойства из объекта obj.
 */
function task6(obj) {
  // ваш код должен быть ниже этой строки
  obj = {
    a: 1,
    b: 2,
  }
  for (const key in obj) {
    delete obj[key];
  }
  // ваш код должен быть выше этой строки
  return obj;
}

/**
 * Задание с *.
 * Написать цикл (не for..in), который пройдется по объекту obj и выведет все значения в консоль
 */
function task7(obj) {
  // ваш код должен быть ниже этой строки
  obj = {
    a: 56,
    j: 34,
    s: 67,
  };
  let objKeys = Object.keys(obj);
  // ваш код должен быть выше этой строки
  for (i = 0; i < objKeys.length; i++) {
    console.log(obj[objKeys[i]]);
  }
}

/**
 * Задание с *.
 *  В функции есть 2 аргумента, объект и строка. Написать логику, чтобы их сумма была такого вида:
    obj = {}
    str = "Vitalik"
    Значит результат должен быть "Hello Vitalik"
    Или
    obj = {}
    str = "Katya"
    Результат: "Hello Katya"
 */
function task8(obj, str) {
  let result = null;
  // ваш код должен быть ниже этой строки
  obj = {
    hello: 'Hello, ',
  };
  str = 'Vitalik';
  function SayHi () {
    result = obj.hello + str;
  }
  SayHi();
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Задание с *.
 * Все аргументы функции должны добавляться в массив.
 */
function task9() {
  const array = [];
  // ваш код должен быть ниже этой строки
  
  for (let i = 0; i < arguments.length; i++) {
  array[i] = arguments[i];
}
  // ваш код должен быть выше этой строки
  return array;
}