const server = require("./app");
const port = 3001;
const { sequelize } = require("./DB_connection");

server.listen(port, async () => 
  await sequelize.sync({alter: true}),
  console.log("Current server on port: " + port + " 🥵🥵🥵")
);

