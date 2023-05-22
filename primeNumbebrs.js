// JavaScript Program to Print All Prime Numbers in an Interval

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
