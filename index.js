// -- Example max 4 Threads

// const crypto = require('crypto');

// const start = Date.now();

// crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha512', () => {
//     console.log('1 end', Date.now() - start);
// });

// crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha512', () => {
//     console.log('2 end', Date.now() - start);
// });

// crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha512', () => {
//     console.log('3 end', Date.now() - start);
// });

// crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha512', () => {
//     console.log('4 end', Date.now() - start);
// });

// crypto.pbkdf2('123ttt', '5', 100000, 64, 'sha512', () => {
//     console.log('5 end', Date.now() - start);
// });

// console.log(process.pid);

// ----- Customs Modules
// -- Process (import)
// require("./sample_scripts/process");

// -- Path (import)
// require("./sample_scripts/patch");

// -- File System (fs) (import)
// require("./sample_scripts/file-system");

// -- OS (import)
// require("./sample_scripts/os");

// - Events (import)
// require("./sample_scripts/events");

// - Stream (import)
// require("./sample_scripts/stream");

// - HTTP (import)
// require("./sample_scripts/http");

// - Server and use custom framework
const PORT = process.env.PORT || 3000;

// Приложение (создание сервера) (import)
const Application = require("./framework/Application");

// DB
const mongoose = require("mongoose");

// Middlewares (import)
const jsonParser = require("./framework/middlewares/parseJson");
const urlParser = require("./framework/middlewares/parseUrl");

// Инициализация
const app = new Application();

// -- Endpoints (основная работа) --
const userRouter = require("./src/user-router");

app.use(jsonParser);
app.use(urlParser("http://localhost:3000"));
app.addRouter(userRouter);

// Start Server with DB
const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://user:oTreIDaRJTBBoGLx@cluster0.k9g6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    // Слушатель
    app.listen(PORT, () => {
      console.log(`Server started on PORT ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();

// user oTreIDaRJTBBoGLx
