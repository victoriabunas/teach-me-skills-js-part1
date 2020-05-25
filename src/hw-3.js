/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.split(str[i]).length - 1 > 1) {
      return false;
    }
  }
  return true;
}

/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
  let result = '';
  let user = [...str];
  for (let i = 0; i < user.length; i++) {
    if (isNaN(user[i]) === true) {
      result += user[i];
    } else continue;
  }
  return result;
}

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
  return Math.max(...arr);
}

/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
  let result = {};
  // ваш код должен быть ниже этой строки
  result = {...obj};
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {
  let result = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += str[i];
    }
  }
  result += ' ';
  let NewResult = result.replace(' ', '.');
  let NewNewResult = NewResult.replace(' ', '.');
  return NewNewResult;
}

/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
  const PlanetNames = [0, 'Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун', 'Плутон'];
  return PlanetNames[num];
}

/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
  let user = [...str];
  user.shift();
  user.pop();
  return user.join('');
}
