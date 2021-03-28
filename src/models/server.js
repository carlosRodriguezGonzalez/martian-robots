const express = require("express");
const http = require("http");
const cors = require("cors");

const { dbConnection } = require("../database/config");
class Server {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.server = http.createServer(this.app);

    dbConnection();
  }

  middlewares = () => {
    this.app.use(cors());
    this.app.use(express.json());
  };

  routes = () => {
    this.app.use("/api/robot", require("../router/robot.router"));
  };

  execute() {
    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

module.exports = Server;
