fs = require('fs');
path = require('path');

function readFileAndPrint(filePath) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) throw err;
        console.log(data);
    });
}

// read a text file
var textFilePath = path.join(__dirname, '..', 'test-files', 'test.txt');
readFileAndPrint(textFilePath);

// read a yml file
var ymlFilePath = path.join(__dirname, '..', 'test-files', 'test.yml');
readFileAndPrint(ymlFilePath);

// read a csv file
var csvFilePath = path.join(__dirname, '..', 'test-files', 'test.csv');
readFileAndPrint(csvFilePath);

// read a xml file
var xmlFilePath = path.join(__dirname, '..', 'test-files', 'test.xml');
readFileAndPrint(xmlFilePath);
