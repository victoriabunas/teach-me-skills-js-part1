/**
 * Напишите код, чтобы вызвав эту фукнцию с 2 чсилами и одной строкой вы получили их сумму в переменной sum
 * если строка придет с символами, то результат функции должна быть строка "неверные данные"
 */
function task1(num1, num2, str) {
  let sum = null;
  // ваш код должен быть ниже этой строки

  if (typeof str === 'string') {
    sum = 'неверные данные';
  } else {
    sum = num1 + num2 + str;
  }

  // ваш код должен быть выше этой строки
  return sum;
}

/**
 * Код ниже перепишете с использованием switch

  let result = null;

  if (age > 5) {
    result = 'Он старше 5 лет';
  } else if (age > 8) {
    result = 'Он старше 8 лет';
  } else if (age > 11) {
    result = 'Он старше 11 лет';
  } else {
    result = 'Нет подходящего возраста';
  }

 */
function task2(age) {
  let result = null;
  // ваш код должен быть ниже этой строки
  switch (age) {
    case 5:
    case 6:
    case 7:
      result = 'Он старше 5 лет';
      break;
    case 8: 
    case 9:
    case 10:
      result = 'Он старше 8 лет';
      break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:  
      result = 'Он старше 11 лет';
      break;
    default:
      result = 'Нет подходящего возраста';
  }
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Используя while напишите цикл от 0 до 21 и каждое нечетное число суммируйте к переменной result
 *
 */
function task3() {
  let result = 0;
  // ваш код должен быть ниже этой строки
  let f = 0;
  while (f <= 21) {
    if (f % 2 !== 0) {
      result += f;
    }
    f++;
  }
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Используя for напишите цикл от 0 до 100. На каждой итерации, что делится на 5 без остатка
 * в консоль нужно отображать цифру 5.
 *
 */
function task4() {
  // ваш код должен быть ниже этой строки
  for (let b = 0; b <= 100; b++)
    if (b % 5 == 0) {
    console.log(5);
    }
  // ваш код должен быть выше этой строки
}

/**
 * В функцию приходят 4 аргумента все разных типов, какие бы не были значения результат всегда должен быть один и тот же, true
 *
 */
function task5(num, str, bool, val) {
  let result = num || str || bool || val; // выражение с || менять нельзя, остальное в ваших руках
  if (num !== undefined) {
    result = true;
  }
  return result;
}

/**
 * Вы должны дополнить код так, чтобы переменная result была не больше number
 */
function task6(number) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // ваш код должен быть ниже этой строки
      if (number > result + i +j) {
      result += i + j;
      } else {result = undefined}
      // ваш код должен быть выше этой строки
    }
  }

  return result;
}


/**
 * Написать такой цикл, чтобы заполнить переменную result символами своего имени,
 * таким образом результатом этой функции будет ваше имя.
 *
 */
function task7() {
  let result = null;
  // ваш код должен быть ниже этой строки
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'v') {
      result = alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'i') {
      result += alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'k') {
      result += alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 't') {
      result += alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'o') {
      result += alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'r') {
      result += alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'i') {
      result += alphabet[j];
      break;
    }
  }
  for (let j = 0; j <= alphabet.length; ++j) {
    if (alphabet[j] = 'a') {
      result += alphabet[j];
      break;
    }
  }
  // ваш код должен быть выше этой строки
  return result;
}


/**
 * Задание с *.
 * Написать код таким образом, чтобы можно было выполнить любое матемптичиское действие с num и str
 */
function task8(num) {
  let str = '10n';
  let result = null;
  // ваш код должен быть ниже этой строки

  // ваш код должен быть выше этой строки
  return result;
}
