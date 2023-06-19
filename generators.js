// Generators allow you to control the flow of execution and generate a sequence of values over time. 
function* fibonacci() {
  let prev = 0;
  let curr = 1;

  while (true) {
    yield curr;
    const temp = prev + curr;
    prev = curr;
    curr = temp;
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next().value); // 13
