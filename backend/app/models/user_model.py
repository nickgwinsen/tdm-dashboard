from typing import Optional, Annotated
from pydantic import BeforeValidator, EmailStr
from pydantic import BaseModel
from odmantic import Field, Model

PyObjectId = Annotated[str, BeforeValidator(str)]


class UserCreate(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)


class UserModel(Model):
    """
    A User record.
    """

    email: EmailStr = Field(...)
    hashed_password: str = Field(...)
