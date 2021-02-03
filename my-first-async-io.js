const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err;

  var o = data.toString().split("\n");
  var l = o.length - 1;
  console.log(l);
});
