from fastapi import FastAPI, Request, Response

app = FastAPI()

@app.post("/webhook")
async def webhook(request: Request, response: Response):
    if (request.headers.get("content-type") == "application/x-www-form-urlencoded"):
        payload = await request.form()
        print(payload['payload'])
        
        response.status_code = 200
    else:
        response.status_code = 400