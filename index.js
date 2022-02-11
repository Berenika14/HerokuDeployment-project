require("dotenv").config();
const express = require("express");

const server = express();
server.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Berenika" },
    { id: 2, name: "Orr" },
    { id: 3, name: "Aaron" },
    { id: 4, name: "Agnesa" },
  ]);
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on ${PORT} 👀`);
});
