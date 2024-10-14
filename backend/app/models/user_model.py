from typing import Optional, Annotated
from pydantic import BeforeValidator, EmailStr
from odmantic import Field, Model

PyObjectId = Annotated[str, BeforeValidator(str)]


class UsersModel(Model):
    """
    A User record.
    """

    email: EmailStr = Field(...)
    hashed_password: str = Field(...)

    model_config = {"collection": "users"}
