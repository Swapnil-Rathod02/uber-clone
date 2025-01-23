const http = require("http");
const dotenv = require("dotenv");
// const { Server } = require("socket.io");
dotenv.config();
const port = process.env.PORT || 8080;
const app = require("./server");
const { socketInilization } = require("./socket");
const server = http.createServer(app);

socketInilization(server);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
