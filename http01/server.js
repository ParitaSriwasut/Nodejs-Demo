const http = require("http");

const server = http.createServer();

server.listen(8000);

server.on("request", (req, res) => {
  //'request' is big Obj
  console.log(req.url);
  if (req.url === "/todo") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write("<h1>Hello, Codecamp15</h1> ");
    res.write("<hr>");
    res.write(`<h1>${todo}</h1>`);
    res.end;
  } else {
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.write("<h1>Hello, Codecamp15</h1> ");
    res.write("<hr>");
    res.write("<h3>Is the Best</h3>");
    res.write("<h3>Is the Best!!!!!!!!</h3>");
    res.end();
  }
});
