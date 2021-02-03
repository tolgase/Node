const fs = require("fs");

var n = fs.readFileSync(process.argv[2]).toString();
var o = n.split("\n");
var l = o.length - 1;
console.log(l);
