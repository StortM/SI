fs = require('fs');
path = require('path');

const readFileAndPrint = async (filePath) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
}

// read a text file
const textFilePath = path.join(__dirname, '..', 'test-files', 'test.txt');
readFileAndPrint(textFilePath)

// read a yml file
const ymlFilePath = path.join(__dirname, '..', 'test-files', 'test.yml');
readFileAndPrint(ymlFilePath);

// read a csv file
const csvFilePath = path.join(__dirname, '..', 'test-files', 'test.csv');
readFileAndPrint(csvFilePath);

// read a xml file
const xmlFilePath = path.join(__dirname, '..', 'test-files', 'test.xml');
readFileAndPrint(xmlFilePath);

