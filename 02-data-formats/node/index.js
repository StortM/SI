import { parseFile } from "./fileParser.js";
import path from 'path';


const __dirname = path.resolve();
    // read a text file
const textFilePath = path.join(__dirname, '..', 'test-files', 'test.txt')
const textFileObj = await parseFile(textFilePath)
console.log(textFileObj)

// read a yml file
const ymlFilePath = path.join(__dirname, '..', 'test-files', 'test.yml')
const ymlFileObj = await parseFile(ymlFilePath)
console.log(ymlFileObj)

// read a csv file
const csvFilePath = path.join(__dirname, '..', 'test-files', 'test.csv')
const csvFileObj = await parseFile(csvFilePath)
console.log(csvFileObj)

// read a xml file
const xmlFilePath = path.join(__dirname, '..', 'test-files', 'test.xml')
const xmlFileObj = await parseFile(xmlFilePath)
console.log(xmlFileObj)
