var num = process.argv;

num = num.slice(2, num.length);

var sum = num.reduce((acc, el) => Number(acc) + Number(el));

console.log(sum);
