from fastapi import FastAPI
import csv
from xml.dom import minidom
import yaml

app = FastAPI()

@app.get("/txt")
def _():
    # .txt file
    txtDict = {}
    with open('04-basic-servers/test-files/test.txt', 'r') as f:
        for line in f:
            key, value = line.strip().split(" ")
            txtDict[key] = value
            
    return txtDict

@app.get("/newroute")
def _():
    return { "message": "This is my second route" }

