// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.readFile("newFile.txt", "utf-8", function (err, data) {
  console.log("File read successfully");
  console.log(data);
  data = data + " write file from javascript";
  fs.writeFile("newFile.txt", data, (err) => {
    if (err) throw err;
    console.log(data);
  });
  for (let i = 0; i < 100; i++) {
    console.log(i + 100);
  }
});

for (let i = 0; i < 100; i++) {
  console.log(i);
}
