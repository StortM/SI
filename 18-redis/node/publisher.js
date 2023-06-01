import { createClient } from "redis";

// Create a Redis client
const publisherClient = createClient();

publisherClient.on('error', err => console.log('Redis Client Error', err));
publisherClient.on("connect", () => console.log("Connected to Redis..."));

await publisherClient.connect();


// Publish messages to the channels
setInterval(() => {
  const message1 = `Message to channel1: ${Date.now()}`;
  publisherClient.publish('channel1', message1);

  const message2 = `Message to channel2: ${Date.now()}`;
  publisherClient.publish('channel2', message2);
}, 2000);


export default publisherClient; 