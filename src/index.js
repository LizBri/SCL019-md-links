const fs = require('fs');
const path = require('path');

// console.log(__dirname);

const files = fs.readdirSync('./');
console.log(files);

console.log(path.join(__dirname, './'));