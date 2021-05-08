const fs = require("fs");

// /////////////////////////////////////////////////////////////////////////////////////////ReadFiles
// fs.readFile("./test.txt", function (err, files) {
//   if (err) {
//     console.log("Error1", err);
//   } else {
//     console.log("Result", files);
//   }
// });

///////////////////////////////////////////////////////////////////////////////////////////CreateFiles

//////////First Method

// fs.appendFile("./test.txt", "createFiles", function (err) {
//   if (err) {
//     console.log("Error2", err);
//   }
//   console.log("Create Saved");
// });

//////////Seccond Method

// fs.open("./test.txt", "w", function (err) {
//   if (err) {
//     console.log("ERROR For Opening", err);
//   }
//   console.log("Opened");
// });

//////////Third Method

// fs.writeFile("./test.txt", "New Content for CreateFiles", function (err) {
//   if (err) {
//     console.log("Error for Creating", err);
//   }
//   console.log("Created with third Method!");
// });

///////////////////////////////////////////////////////////////////////////////////////UpdateFiles

//////////////First Method

// fs.appendFile("./test.txt", "This is for updating", function (err) {
//   if (err) {
//     console.log("Error3", err);
//   }
//   console.log("Created Again");
// });
/////////////Second Method

// fs.writeFile("./test2.txt", "thi is a test", function (err) {
//   if (err) {
//     console.log("Error4", err);
//   }
//   console.log("Replaced");
// });
///////////////////////////////////////////////////////////////////////////////////////DeleteFiles
// fs.unlink("test.txt", function (err) {
//   if (err) {
//     console.log("Error for Deleting", err);
//   }
//   console.log("File Deleted");
// });
/////////////////////////////////////////////////////////////////////////////////////Rename Files
// fs.rename("test3.txt", "ReanemedFile.txt", function (err) {
//   if (err) {
//     console.log("Error For Renaming", err);
//   }
//   console.log("File Renamed");
// });
///////////////////////////////////////////////////////////////////////////////////
