from typing import Optional, Annotated
from enum import Enum
from pydantic import BeforeValidator, EmailStr
from odmantic import Field, Model
from datetime import datetime

PyObjectId = Annotated[str, BeforeValidator(str)]


class ReviewType(Enum):
    GOOGLE = 1
    FACEBOOK = 2
    OTHER = 3


class EntityTypeEnum(Enum):
    LOCATION = 1
    RESTAURANT = 2


class UsersModel(Model):
    """
    A User record.
    """

    email: EmailStr = Field(...)
    hashed_password: str = Field(...)

    model_config = {"collection": "users"}
