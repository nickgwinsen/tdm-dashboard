import logging

from fastapi import APIRouter, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth
from app.services.dump_to_db import dump_to_mongo

log = logging.getLogger("uvicorn")


app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/dump")
async def loaddb():
    await dump_to_mongo()
    return "check the db."


app.include_router(auth.router)
