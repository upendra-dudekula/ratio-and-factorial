let factorialOfNum = require("../factorial/index");
let ratioOfTwoNums = require("../ratio/index");

const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwoNums(num1, num2);
  const factorial = factorialOfNum(num3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
