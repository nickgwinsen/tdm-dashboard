from motor.motor_asyncio import AsyncIOMotorClient
from app.config.vars import variables
from odmantic import AIOEngine

uri = variables.MONGO_URI



client = AsyncIOMotorClient(uri)

db = AIOEngine(client=client, database="tdm")

