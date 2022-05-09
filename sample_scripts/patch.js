const path = require("path");

// -- Склейка путей в один путь
// console.log(path.join(__dirname, '..', 'first', 'second'));

// -- Получить абсолютный путь (аналог __dirname)
const fullpath = path.resolve("first", "second.js");

// -- Парсинг пути
// console.log("Распасршенный путь: ", path.parse(fullpath));

// -- Получить разделитель OS
// console.log("Разделитель ОС :", path.sep);

// -- Проверка на абсолютный путь
// console.log("Абсолютный ли путь? :", path.isAbsolute(fullpath));
// console.log("Абсолютный ли путь? :", path.isAbsolute('first/second'));

// -- Название файла
// console.log('Название файла :', path.basename(fullpath));

// -- Расширение файла
// console.log('Расширение файла :', path.extname(fullpath));

// -------------------------
// -- Работа с URL
// const siteURL = 'http://localhost:8080/users?id=5123';

// const url = new URL(siteURL);

// console.log(url);