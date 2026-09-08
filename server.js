import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("Hello World ! From GitHub CI/CD Pipeline ! hello 10turtle ...");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
