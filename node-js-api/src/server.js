import http from "node:http";

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/products") {
    return response.end("Product list!");
  }

  if (method === "POST" && url === "/products") {
    return response.writeHead(201).end("Registered product!");
  }

  return response.writeHead(404).end("Route not found!");

});
server.listen(3333);
