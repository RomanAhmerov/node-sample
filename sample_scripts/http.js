// const PORT = process.env.PORT || 3000;

// --- Прямая реализация
// const server = http.createServer((req, res) => {
// -- SSR
//   res.writeHead(200, {
//     "Content-type": "text/html; charset=utf-8",
//   });
//   res.end(`<h1>Server is work!</h1>`);

// Rest API (работает с буфером или со строкой)
// res.writeHead(200, {
//   "Content-type": "application/json",
// });

// if (req.url === "/users") {
//   res.end(JSON.stringify([{ id: 1, name: "Jack" }]));
// }

// if (req.url === "/posts") {
//   res.end("POSTS");
// }

// res.end(req.url);
// });

// Слушатель
// server.listen(PORT, () => {
//   console.log(`Server started on PORT ${PORT}`);
// });

// --- Свой минифреймворк
// // Роутерn (import)
// const Router = require("../framework/Router");

// // Приложение (создание сервера) (import)
// const Application = require("../framework/Application");

// // Инициализация
// const app = new Application();

// const router = new Router();

// // Создание endpoints
// router.get("/users", (req, res) => {
//   res.end("YOU SEND REQUEST TO /USERS");
// });

// router.get("/posts", (req, res) => {
//   res.end("YOU SEND REQUEST TO /POSTS");
// });

// app.addRouter(router);

// app.listen(PORT, () => {
//   console.log(`Server started on PORT ${PORT}`);
// });
