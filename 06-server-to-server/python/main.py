from fastapi import FastAPI
from datetime import datetime
import requests

app = FastAPI()

@app.get("/date")
async def _():
  return datetime.now()

@app.get("/datefromexpress")
async def _():
  # use requests to call the node server
  response = requests.get("http://127.0.0.1:3000/date")
  date = response.json()

  return date

@app.get("/datengrok")
async def _():
  # use requests to call the node server tunnelled through ngrok
  response = requests.get("https://3c74-195-249-146-100.eu.ngrok.io/date")
  date = response.json()

  return date