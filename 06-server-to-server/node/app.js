import express from "express";
import fetch from "node-fetch";

const app = express();


app.get("/date", (req, res) => {
  res.send(new Date());
});

app.get("/date-from-fastapi", async (req, res) => {
/* task get the date from fastapi. Complete the following: */
  const response = await fetch("http://localhost:8000/date");
  const date = await response.json();
  res.send(date);
});

const PORT = 3000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
