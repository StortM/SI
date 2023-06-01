import 'dotenv/config';

console.log(process.env.MY_SECRET);
console.log(process.env.MULTILINE_PRIVATE_KEY);

// system level environment variables
console.log(process.env.PATH);
console.log(process.env.HOME);