const fs = require("fs");
const { resolve } = require("path");
const path = require("path");

// -- Создание директорий
// Синхронная реализация (рекурсивное создание папок {recursive: true} "древовидная структура")
// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {
//   recursive: true,
// });

// Асинхронная реализация
// fs.mkdir(path.resolve(__dirname, "dir"), (err) => {
//     if (err) {
//         console.log('Ошибка :', err);
//     } else {
//         console.log('Папка создана!')
//     }
// });

// -- Удаление директорий
// Асинхронная реализация
// fs.rmdir(path.resolve(__dirname, "dir"), (err) => {
//   if (err) {
//     console.log("Ошибка :", err);
//     // throw err; // можно также пробросить ошибку
//   } else {
//     console.log("Папка успешно удалена!");
//   }
// });

// -- Создать файл и записать в него данные
// Асинхронная реализация
// fs.writeFile(
//   path.resolve(__dirname, "test.txt"),
//   "first second",
//   (err) => {
//       if (err) {
//           throw err;
//       } else {
//           console.log('Файл записан!')
//       }
//   }
// );

// Дозаписать данные в файл (асинхронная реализация)
// fs.appendFile(
//   path.resolve(__dirname, "test.txt"),
//   " third",
//   (err) => {
//       if (err) {
//           throw err;
//       } else {
//           console.log('Файл дозаписан!')
//       }
//   }
// );

// Реализация на Promise
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err.message);
      } else {
        console.log("Файл записан!");
        resolve();
      }
    })
  );
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, ` ${data}`, (err) => {
      if (err) {
        return reject(err.message);
      } else {
        console.log("Файл записан!");
        resolve();
      }
    })
  );
};

// writeFileAsync(path.resolve(__dirname, "test.txt"), "first second")
//   .then(() => {
//     appendFileAsync(path.resolve(__dirname, "test.txt"), "third");
//   })
//   .then(() => {
//     appendFileAsync(path.resolve(__dirname, "test.txt"), "fourth");
//   })
//   .then(() => {
//     appendFileAsync(path.resolve(__dirname, "test.txt"), "fifth");
//   })
//   .catch((err) => console.log(err));

// -- Чтение файла (асинхронная реализация)
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    })
  );
};

// readFileAsync(path.resolve(__dirname, "test.txt")).then((data) => {
//   console.log(data);
// });

// -- Удаление файла (асинхронная реализация)
const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) =>
    fs.rm(path, (err) => {
      if (err) {
        reject(err.message);
      } else {
        resolve();
      }
    })
  );
};

// removeFileAsync(path.resolve(__dirname, "test.txt"));

// Задача
const text = process.env.TEXT || "";

writeFileAsync(path.resolve(__dirname, "text.txt"), text)
  .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
  .then((fileText) => {
    const count = String(fileText).split(" ").length;
    writeFileAsync(path.resolve(__dirname, "count.txt"), `Кол-во слов: ${count}`);
  })
  .then(() => {
    removeFileAsync(path.resolve(__dirname, "text.txt"));
  });
