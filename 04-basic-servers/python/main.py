from fastapi import FastAPI
from datetime import datetime
from fileParser import convertTxtToDict, convertCsvToDict, convertXmlToDict, convertYmlToDict, convertJsonToDict

app = FastAPI()

@app.get("/parse-txt")
def _():
    return convertTxtToDict("test-files/test.txt")

@app.get("/parse-csv")
def _():
    return convertCsvToDict("test-files/test.csv")

@app.get("/parse-xml")
def _():
    return convertXmlToDict("test-files/test.xml")

@app.get("/parse-yml")
def _():
    return convertYmlToDict("test-files/test.yml")

@app.get("/parse-json")
def _():
    return convertJsonToDict("test-files/test.json")

@app.get("/date")
def get_date():
    return datetime.now()