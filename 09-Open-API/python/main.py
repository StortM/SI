from fastapi import FastAPI

app = FastAPI(
  prefix="/api", 
  title="Spacecraft User API",
  description="An API to manage spacecrafts and users",
  version="0.0.1",
  terms_of_service="http://example.com/terms/",
  contact={
      "name": "Deadpoolio the Amazing",
      "url": "http://x-force.example.com/contact/",
      "email": "dp@x-force.example.com",
  },
  license_info={
      "name": "Apache 2.0",
      "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
  },
)

from routers import spacecraft_router
app.include_router(spacecraft_router, tags=["spacecrafts"])

from routers import astronaut_router
app.include_router(astronaut_router, tags=["astronauts"])