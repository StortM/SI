import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
}); */

app.get("/timestamp", (req, res) => {
  res.send(new Date());
});

// tested with https://www.test-cors.org/
app.get('/api/data', cors({ origin: 'https://www.test-cors.org' }), (req, res) => {
  const data = {
    message: 'This is the response from the server!',
  };
  res.json(data);
});

const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on port", PORT));
