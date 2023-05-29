import express from 'express'
import { parseFile } from './fileParser.js'

const app = express()

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
