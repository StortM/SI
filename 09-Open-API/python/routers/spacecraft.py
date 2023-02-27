from fastapi import APIRouter, Query
from typing import Union
from pydantic import BaseModel

router = APIRouter()

spacecrafts = [
    {
        "id": 1,
        "name": "Crew Dragon",
        "type": "capsule",
        "description": "SpaceX's first crewed spacecraft",
    },
    {
        "id": 2,
        "name": "Falcon 9",
        "type": "rocket",
        "description": "SpaceX's first reusable rocket",
    },
    {
        "id": 3,
        "name": "Falcon Heavy",
        "type": "rocket",
        "description": "SpaceX's most powerful rocket",
    },
    {
        "id": 4,
        "name": "Starship",
        "type": "rocket",
        "description": "SpaceX's next-generation rocket",
    },
]

class Spacecraft(BaseModel):
    id: int
    name: str
    type: Union[str, None]
    description: str

@router.get("/spacecrafts/{id}", tags=["spacecrafts"])
def get_spacecrafts(id:int):
    # find the spacecraft with the given id
    for spacecraft in spacecrafts:
        if spacecraft["id"] == id:
            return spacecraft

@router.get("/spacecrafts", tags=["spacecrafts"], response_model=list[Spacecraft])
def get_spacecrafts():
    # return all spacecrafts
    return spacecrafts

@router.post("/spacecrafts", tags=["spacecrafts"])
def add_spacecraft(spacecraft: Spacecraft):
    # add a new spacecraft
    spacecrafts.append(spacecraft)
    return spacecraft
