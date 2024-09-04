const fs = require('node:fs');
const path = require('node:path');

// ---------------------------------------------------------------------------
// fs.readdir(__dirname, (err, files) => {
//   if (err) {
//     return console.error('Помилка під час читання папки: ', err);
//   }

//   console.log('Список файлів у поточній папці: ');
//   files.forEach(f => console.log(f));
// });

// console.log('Test');
// ---------------------------------------------------------------------------
try {
  const files = fs.readdirSync(__dirname);
  console.log('Список файлів у поточній папці: ');
  files.forEach(f => console.log(f));
} catch (error) {
  console.error('Помилка під час читання папки: ', error);
}

console.log('Test');
// ---------------------------------------------------------------------------
