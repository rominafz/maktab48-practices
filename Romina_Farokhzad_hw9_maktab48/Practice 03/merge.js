// let fs = require("fs");
// fs.readFile("name.txt", "utf8", function (err, data) {
//   if (err) throw err;
//   else {
//     fs.readFile("phonenumber.txt", "utf8", function (err1, data1) {
//       if (err1) throw err1;
//       else {
//         var array = data.split("\r\n");
//         var array1 = data1.split("\r\n");
//         // console.log(array);
//         // console.log(array1);
//         // console.log(array.length);
//         // console.log(array1.length);
//         let array3 = [];
//         for (let i = 0; i < array1.length; i++) {
//           array3[i] = array[i] + " phone number is :" + array1[i];
//         }
//         console.log(array3);
//         //create a file named notebook.txt:Hello content!
//         fs.appendFile("notebook.txt", array3, function (err) {
//           fs.writeFile("notebook.txt", array3, function (err) {
//             if (err) throw err;
//             console.log("Saved!");
//           });
//         });
//       }
//     });
//   }
// });
// const fs = require("fs");

// fs.readFile("./name.txt", "utf-8", function (err, data) {
//   fs.readFile("./phoneNumber.txt", "utf-8", function (err2, data2) {
//     let arr1 = data.split("\r\n");
//     console.log(arr1);
//     let arr2 = data2.split("\r\n");
//     console.log(arr2);
//     let str = [];
//     for (let i = 0; i < arr1.length; i++) {
//       str.push(`${arr1[i]} number:  ${arr2[i]} \n`);
//     }
//     console.log(str);
//     // fs.appendFile("./my.txt", str.join(""), function () {});
//   });
// });

const fs = require("fs");
function splitArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split("-");
  }
  return arr;
}
fs.readFile("./name.txt", "utf-8", function (err, data) {
  fs.readFile("./phoneNumber.txt", "utf-8", function (err2, data2) {
    let arr1 = data.split("\r\n");
    let arr2 = data2.split("\r\n");
    splitArray(arr1);
    splitArray(arr2);
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
      let newArr = [];
      newArr.push(arr1[i][1]);
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i][0] == arr2[j][0]) {
          newArr.push(arr2[j][1]);
        }
      }
      if (newArr.length == 1) {
        result.push(`${newArr[0]} hasn't any number`);
        // console.log(`${newArr[0]} hasn't any number`);
      } else if (newArr.length == 2) {
        result.push(`${newArr[0]}'s phone number is ${newArr[1]} `);
        // console.log(`${newArr[0]}'s phone number is ${newArr[1]} `);
      } else {
        result.push(
          `${newArr[0]}'s phone numbers are ${newArr[1]},${newArr[2]}`
        );
        // console.log(`${newArr[0]}'s phone numbers are ${num}`);
      }
    }
    // console.log(result);

    fs.appendFile("./notebook.txt", result.join("\n"), function () {
      if (err) throw err;
      console.log("Saved!");
    });
  });
});
