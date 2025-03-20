const http = require("http");

// Creating a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, this is a Node.js HTTP server!");
});

// Listening on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
