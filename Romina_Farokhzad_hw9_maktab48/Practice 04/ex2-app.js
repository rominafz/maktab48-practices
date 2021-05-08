const sumIs = require("./sum");

function squre(x, y) {
  let result = sumIs(x, y);
  let multiplies = result * result;
  console.log(`Result Is ${multiplies}`);
}
squre(2, 3);
// console.log(sumIs(2, 3));
