import publisherClient from "./publisher.js";

// Create a Redis client
export const subscriber1 = publisherClient.duplicate();

subscriber1.on('error', err => console.log('Redis Client Error', err));
subscriber1.on("connect", () => console.log("Client 1 Connected to Redis..."));

await subscriber1.connect();

// need to create listener function
const listener = (message, channel) => console.log(message, channel);

// Subscribe to channels
subscriber1.subscribe('channel1', listener);

// Handle incoming messages
subscriber1.on('message', (channel, message) => {
  console.log(`Subscriber 1 received message from channel ${channel}: ${message}`);
});