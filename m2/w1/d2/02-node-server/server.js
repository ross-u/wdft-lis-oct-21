// import a Node utility module 'http'
const http = require("http");

// Instanitate a server object
const server = http.createServer(function (request, response) {
  console.log("Received a request");
  // route or endpoint
  if (request.url === "/") {
    // specify how will the server work
    response.write(`
    <html>
      <head></head>
      <body>
        <h1>Home page</h1>
      </body>
    </html>`);
    response.end();
  } else if (request.url === "/about") {
    response.write(`
    <html>
      <head></head>
      <body>
        <h2>About me route!!!</h2>
      </body>
    </html>`);

    response.end();
  } else {
    response.statusCode = 404;
    response.write("404 not found");
    response.end();
  }
});

// 127.0.0.1:3000

// Start the server
server.listen(3000);
