const fs = require('fs');

fs.readFile("readWrite.txt", "utf-8", function (err, data) {
    console.log("File read successfully");
    console.log(data);
    let data1 = data.replace(/\s+/g, ' ');
    console.log(data1);
    fs.writeFile("readWrite.txt", data1, "utf-8", function (err) {
        if (err) throw err;
        console.log("File written successfully");
        console.log(data1);
    });
});
