const http = require("http");
const fs = require("fs");
const cors = require("cors");

const PORT = 3030;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  if (req.method === "GET" && req.url === "/tool_titles") {
    // Read file asynchronously
    fs.readFile("./modules/tool_titles.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }
      // Parse JSON data
      let jsonData;
      try {
        jsonData = JSON.parse(data);
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }
      // Send JSON data
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(jsonData));
    });
  } else if (req.method === "GET" && req.url === "/tool_info") {
    // Read file asynchronously
    fs.readFile("./modules/tool_info.json", "utf8", (err, data) => {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }

      let jsonData;
      try {
        jsonData = JSON.parse(data);
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end();
        return;
      }
      // Send JSON data
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(jsonData));
    });
  } else {
    res.statusCode = 405;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
