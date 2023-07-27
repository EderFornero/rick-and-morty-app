const server = require("./app");
const port = 3001;
const { conn } = require("./DB_connection");

server.listen(port, async () => 
  await conn.sync({alter: true}),
  console.log("Current server on port: " + port + " 🥵🥵🥵")
);

