const http = require("http");
const EventEmitter = require("events");

module.exports = class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
    this.middlewares = [];
  }

  use(middleware) {
    this.middlewares.push(middleware);
  }

  listen(port, callback) {
    this.server.listen(port, callback);
  }

  addRouter(router) {
    //   endpoint = {
    //       '/users' : {
    //           'GET' : handler
    //       }
    //   };

    // Добавление роутов их методов и обработчиков
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];

      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method];

        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      // Body request
      let body = "";

      // Чтение request
      req.on("data", (chunk) => {
        body += chunk;
      });

      // Конец чтения request (обработки запроса)
      req.on("end", () => {
        if (body) {
          req.body = JSON.parse(body);
        }

        // Применение middlewares
        this.middlewares.forEach((middleware) => {
          middleware(req, res);
        });

        // Вызов событий
        const emitted = this.emitter.emit(
          this._getRouteMask(req.pathname, req.method),
          req,
          res
        );

        // Если нет метода для обработки endpoint-а "неправильный URL"
        if (!emitted) {
          res.end("Error 404");
        }
      });
    });
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }
};
