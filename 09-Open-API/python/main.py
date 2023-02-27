from fastapi import FastAPI

app = FastAPI()

from routers import spacecraft_router
app.include_router(spacecraft_router)

from routers import astronaut_router
app.include_router(astronaut_router)