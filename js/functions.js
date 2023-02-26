// Функция для проверки длины строки

const isLessOrEqual = (string, length) => string.length <= length;

// Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const tempString = string.toLowerCase().replaceAll(" ", "");

  return tempString === tempString.split("").reverse().join("");
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.

function getNum(param) {
  const str = param.replaceAll(" ", "").split("");
  let num = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (+str[i] === parseInt(str[i])) {
      num += +str[i];
    }
  }
  return Math.floor(num);
}

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;

  return actualPad <= 0
    ? string
    : pad.slice(0, actualPad % pad.length) +
        pad.repeat(actualPad / pad.length) +
        string;
};
