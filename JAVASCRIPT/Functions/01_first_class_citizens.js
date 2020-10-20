function sum(num1, num2) {
  return num1 + num2;
}

//console.log(sum(10, 29));

//First class citizens

// #1
const exe = sum;
//console.log(exe(6, 8));

//#2
function test(num1, num2, func){
  return func(num1, num2);
}

//console.log(test(10, 30, sum))

// #3
function test_2(func) {
  return func;
}

const res_test = test_2(sum);
console.log(res_test(13, 30));
