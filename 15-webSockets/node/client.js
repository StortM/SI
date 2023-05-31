import WebSocket from "ws";
import readline from "readline";

const webSocketClient = new WebSocket("ws://localhost:3000");

webSocketClient.on("open", () => {
  console.log("Connected to server");

  // Create readline interface to read messages from console
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Read messages from console and send to server
  rl.on('line', (input) => {
    // Send the message to the server
    webSocketClient.send(input);
  });
});

webSocketClient.on("message", (event) => {
  console.log(`Received message: ${event}`);
});

webSocketClient.on("close", () => {
  console.log('WebSocket connection closed');
});

