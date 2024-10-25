import os

from dotenv import load_dotenv

load_dotenv()


class Variables:
    MONGO_URI = os.getenv("MONGO_URI")
    ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))
    SECRET_KEY = os.getenv("SECRET_KEY")


variables = Variables()
