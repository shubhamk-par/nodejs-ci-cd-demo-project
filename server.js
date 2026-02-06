import express from "express";
const app = express();
const server = require("http").createServer(app);
app.get("/", (req, res) => {
  res.send("Hello World! From GitHub CI/CD Pipeline ! hello");
});

server.listen(5050, () => {
  console.log("Server is running on port 5050");
});
