const fs = require('node:fs');
const fsPromises = require('node:fs/promises');
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
// try {
//   const files = fs.readdirSync(__dirname);
//   console.log('Список файлів у поточній папці: ');
//   files.forEach(f => console.log(f));
// } catch (error) {
//   console.error('Помилка під час читання папки: ', error);
// }

// console.log('Test');
// ---------------------------------------------------------------------------
// fsPromises
//   .readdir(__dirname, { encoding: 'utf-8' })
//   .then(files => console.log('Список файлів у поточній папці: ', files))
//   .catch(err => console.error('Помилка під час читання папки: ', err));

// console.log('Test');
// ---------------------------------------------------------------------------
fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.error('Помилка під час читання папки: ', err);
  }

  const jsFilesFiltred = files.filter(f => path.extname(f) === '.js');

  jsFilesFiltred.forEach(f => {
    const filePath = path.join(__dirname, f);

    fs.readFile(filePath, (err, file) => {
      if (err) {
        return console.error('Помилка під час читання файлу: ', err);
      }
      console.log(`Вміст файлу\n${file}: `);
      console.log('==========================================================');
    });
  });
});
