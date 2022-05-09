const Emitter = require("events");

const emitter = new Emitter();

const messageAcceptance = (data, second, third) => {
    console.log(data);
    console.log(second);
    console.log(third);
}

// Генерация без ограничений
emitter.on("message", messageAcceptance);

// Генерация событий один раз
// emitter.once("message", (data, second, third) => {
//   console.log(data);
//   console.log(second);
//   console.log(third);
// });

// Удаление слушателя событий
// emitter.removeAllListeners(); // - удалить все события
// emitter.removeListener("message", messageAcceptance); // - удалить определенное событие

const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123, 456);
} else {
  emitter.emit("message", "Нет сообщения");
}

// Когда круто использовать?
// https
// websockets
// long pulling
// clusters
