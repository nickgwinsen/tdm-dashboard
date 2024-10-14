import os

from dotenv import load_dotenv

load_dotenv()


class Variables:
    MONGO_URI = os.getenv("MONGO_URI")


variables = Variables()
