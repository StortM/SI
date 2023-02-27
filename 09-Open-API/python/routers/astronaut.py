from fastapi import APIRouter, Query
from typing import Union
from pydantic import BaseModel

router = APIRouter()

astronauts = [
    {
        "id": 1,
        "name": "Sally Ride",
        "spacecraft": "Challenger",
        "age": 61,
    },
    {
        "id": 2,
        "name": "Mae Jemison",
        "spacecraft": "Endeavour",
        "age": 63,
    },
    {
        "id": 3,
        "name": "Ellen Ochoa",
        "age": 65,
    },
    {
        "id": 4,
        "name": "Eileen Collins",
        "age": 67,
    }
]

class Astronaut(BaseModel):
    id: int
    name: str
    spacecraft: Union[str, None]
    age: int

@router.get("/astronauts/{id}", tags=["spacecrafts"])
def get_astronauts(id:int):
    # find the astronaut with the given id
    print(astronauts)
    for astronaut in astronauts:
        if astronaut["id"] == id:
            return astronaut
        
@router.post("/astronauts", tags=["spacecrafts"])
def add_astronaut(astronaut: Astronaut):
    # add a new astronaut
    astronauts.append({"id": astronaut.id, "name": astronaut.name, "age": astronaut.age, "spacecraft": astronaut.spacecraft})
    return astronaut

