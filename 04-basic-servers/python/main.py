from fastapi import FastAPI
from datetime import datetime
import requests
from dotenv import load_dotenv, dotenv_values

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

@app.get("/date")
def get_date():
    return datetime.now()

@app.get("/datefromexpress")
def get_date_from_express():
    response = requests.get("http://127.0.0.1:8080/date")
    date = response.json()
    return date

@app.get("/datengrok")
def _():
    response = requests.get("https://3c74-195-249-146-100.eu.ngrok.io/date")
    date = response.json()
    return date
