const { initialiseWebServer } = require("./server.js");

async function start() {
  await initialiseWebServer();
}

start();
