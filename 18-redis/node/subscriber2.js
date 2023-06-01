import publisherClient from "./publisher.js";

const listener = (message, channel) => console.log(message, channel);

export const subscriber2 = publisherClient.duplicate();

subscriber2.on('error', err => console.log('Redis Client Error', err));
subscriber2.on("connect", () => console.log("Connected to Redis..."));

await subscriber2.connect();

subscriber2.subscribe(['channel1', 'channel2'], listener);

subscriber2.on('message', (channel, message) => {
  console.log(`Subscriber 2 received message from channel ${channel}: ${message}`);
});