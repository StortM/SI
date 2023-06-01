import { WebSocketServer } from "ws";

const PORT = 3000;
const server = new WebSocketServer({ port: PORT });

console.log("WebSocket server running on port", PORT);

server.on("connection", (ws) => {
  console.log("New connection", server.clients.size);

  // generate a unique identifier for each client
  const uniqueIdentifier = Math.random().toString(36).substr(2, 9);
  ws.send("Successfully connected to server. You have been given id: " + uniqueIdentifier);


  ws.on("message", (message) => {
    console.log(`Received message: ${message} from client with id: ${uniqueIdentifier}`);

    console.log("Client IP:", ws._socket.remoteAddress);
    console.log("Client Unique Identifier:", ws._socket._peername);

    server.clients.forEach((client) => {
      client.send(`A message was sent from client with id ${uniqueIdentifier} : ${ message }`);
    });
  });

  ws.on("close", () => {
    console.log("Client disconnected with id : ", uniqueIdentifier, "Remaining clients online : ", server.clients.size);
  });
});
