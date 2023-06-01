import { createClient } from "redis";

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

client.on("connect", () => console.log("Connected to Redis..."));

await client.connect();

// key value pair
await client.set("myKey", "some value");
const value = await client.get("myKey");
console.log(value);

// new key value pair with same key
await client.set("myKey", "some other value");
const newValue = await client.get("myKey");
console.log(newValue);

// keys with expiration
await client.set("myKey", "some value", "EX", 10);
const valueWithExpiration = await client.get("myKey");
console.log(valueWithExpiration);

// set
await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis incorporated',
    age: 29,
    pet: 'dog',
    petName: 'Rex',
});

const userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
