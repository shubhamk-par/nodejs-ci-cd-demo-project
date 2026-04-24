import express from "express";
import http from "http";
const app = express();
const server = http.createServer(app);
app.get("/", (req, res) => {
  res.send("Hello World! From GitHub CI/CD Pipeline ! hello 10turtle");
});

server.listen(8988, () => {
  console.log("Server is running on port 5050");
});
