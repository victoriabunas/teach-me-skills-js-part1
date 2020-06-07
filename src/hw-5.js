/**
 * Написать функцию, которая будет принимать бесконечное количество аргументов(коллбэк кфнкций) и во втором вызове
 * бесконечное количесвто аргументов.
 * Например: foo(foo1(foo2(10)))
 * Ваша функция должна выглядеть так:
 * task1(foo, foo1, foo2)(10);
 */
function task1() {

}

/**
 * Напсиать функцию, которая будет принимать строку. Функция должна проверить явяляется ли строка палиндромом
 */
function task2(str) {

  str = str.toLowerCase();
  return str === str.split('').reverse().join('');

}

/**
 * Написать функцию, которая будет принимать целое число n. Нужно вывести в консоль числа от 1 до n.
 * Вместо чисел кратных на 3 выводить fizz, вместо чисел кратных 5 - buzz. Если числа кратные 15, то fizzbuzz
 */
function task3(n) {

  for (let num = 1; num <= n; num++) {
    if (num % 15 === 0) {
      console.log('fizzbuzz')
    } else if (num % 3 === 0) {
      console.log('fizz')
    } else if (num % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(num)
    }
  }
}

/**
 * Напсиать функцию, что будет принимать 2 аргумента, строки. Вы должны проверить является ли второе слово анаграммой
 * второго.
 * Примеры:
 * anagram('finder', 'Friend'); => true
 * anagram('', ''); => false
 */
function task4(str1, str2) {
  if (str1 === str2) {
    return false;
  }
  str1 = str1.toLowerCase().split('').sort();
  str2 = str2.toLowerCase().split('').sort();
  return str1.join('') === str2.join('');
}

/**
 * Написать функцию, которая будет принимать число. Функция должна возвращать массив чисел, которые являются делителями.
 */
function task5(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i)
    }
  } return arr
}
