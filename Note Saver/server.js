const http = require("http");
const fs = require("fs");

let notes = [];

const server = http.createServer((req, res) => {

  // HOME PAGE
  if (req.url === "/" && req.method === "GET") {

    fs.readFile("index.html", "utf-8", (err, data) => {

      let notesList = notes.map(n => `<li>${n}</li>`).join("");

      let updatedPage = data.replace(
        "</body>",
        `<h2>Your Notes:</h2><ul>${notesList}</ul></body>`
      );

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(updatedPage);
    });
  }

  // ADD NOTE
  else if (req.url === "/add-note" && req.method === "POST") {

    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const params = new URLSearchParams(body);
      const note = params.get("note");

      if (note) {
        notes.push(note);
      }

      res.writeHead(302, { Location: "/" });
      res.end();
    });
  }

  // 404
  else {
    res.writeHead(404);
    res.end("Page not found");
  }

});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});