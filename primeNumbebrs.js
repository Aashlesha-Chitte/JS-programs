// JavaScript Program to Print All Prime Numbers in an Interval

// A prime number is a whole number greater than 1 that can only be divided evenly by 1 and itself, without any other numbers as factors. Put simply, prime numbers have no divisors other than 1 and the number itself.

// using setInterval
let i = 1;
let flag = true;
const isPrimeNumber = (num, flag) => {
  if (num === 1) {
    flag = false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  return flag ? "is a Prime Number" : "is Not a Prime Number";
};
const intervalId = setInterval(() => {
  const isPrimeNo = isPrimeNumber(i, flag);
  console.log(i, isPrimeNo);
  i++;

  if (i === 6) {
    clearInterval(intervalId);
  }
}, 1000);

// using setTimeout
const isPrime = (num, flag) => {
  if (num === 1) {
    flag = false;
    return "is not a Prime Number";
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
    return flag ? "is a Prime Number" : "is not a Prime Number";
  }
};

const RangeForPrimeNumber = (no) => {
  let flag = true;
  for (let i = 1; i <= no; i++) {
    setTimeout(() => {
      console.log(i, isPrime(i, flag));
    }, i * 1000);
  }
};
RangeForPrimeNumber(5);

// output:
// will print one by one after some delay
// 1 is Not a Prime Number
// 2 is a Prime Number
// 3 is a Prime Number
// 4 is not a Prime Number
// 5 is a Prime Number
