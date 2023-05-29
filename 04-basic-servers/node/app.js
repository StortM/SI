import express from 'express'
import { parseFile } from './fileParser.js'

const app = express()

app.get("/date", (req, res) => {
    res.send(new Date());
});

app.get("/datefromfastapi", async (req, res) => {
/* task get the date from fastapi. Complete the following: */
    const response = await fetch("http://127.0.0.1:8000/date");
    const date = await response.json();
    res.send(date);
});
  
app.get("/parse-csv", async (req, res) => {
    const parsedObj = await parseFile("./test-files/test.csv");
    res.send(parsedObj);
  });
  
app.get("/parse-json", async (req, res) => {
    const parsedObj = await parseFile ("./test-files/test.json");
    res.send(parsedObj);
  });
  
app.get("/parse-xml", async (req, res) => {
    const parsedObj = await parseFile("./test-files/test.xml");
    res.send(parsedObj);
  });
  
app.get("/parse-yaml", async (req, res) => {
    const parsedObj = await parseFile("./test-files/test.yaml");
    res.send(parsedObj);
  });
  
app.get("/parse-txt", async (req, res) => {
    const parsedObj = await parseFile("./test-files/test.txt");
    res.send(parsedObj);
  });
  
const PORT = 3000

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))
