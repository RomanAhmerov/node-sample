// Readable - чтение
// Writable - запись
// Duplex - чтение и запись (Readable + Writable)
// Transform - аналог Duplex, но может изменять данные по мере чтения

const fs = require("fs");
const { Http2ServerResponse } = require("http2");
const path = require("path");

// Чтение за один раз (fs)
// fs.readFile(path.resolve(__dirname, "text.txt"), (err, data) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log(data)
//     }
// });

// Чтение по кусочкам (stream) (chunk = 64kB)
// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"), {
// //   encoding: "utf-8",
// });

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// stream.on("open", () => {
//   console.log("Начало чтения файла!");
// });

// stream.on("end", () => {
//   console.log("Чтение файла закончено!");
// });

// stream.on("error", (err) => {
//   console.log(`Возникла ошибка при чтении файла: ${err}`);
// });

// Запись по кусочкам (stream)
// const writeableStream = fs.createWriteStream(
//   path.resolve(__dirname, "text2.txt")
// );

// for (let i = 0; i < 35; i++) {
//   writeableStream.write(i + "\n");
// }

// writeableStream.end();
// // writeableStream.close();
// // writeableStream.destroy();
// writeableStream.on("error", (err) => {
//   console.log(`Возникла ошибка при записи информации в файл: ${err}`);
// });

// Работа Stream в http
// const http = require("http");
// http.createServer((req, res) => {
//   // req - readable stream
//   // res - writable stream
//   const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));

//   // Чтобы добиться синхронизации (чтения и скачки файла)
//   stream.pipe(res);

//   //   stream.on("data", (chunk) => res.write(chunk));
//   //   stream.on("end", (chunk) => res.end());
// });
