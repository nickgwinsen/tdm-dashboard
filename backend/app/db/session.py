from motor.motor_asyncio import AsyncIOMotorClient
from app.config.vars import variables


uri = variables.DB_STRING


async def init_database():
    client = AsyncIOMotorClient(uri)
    db = client.tdm
    return db
