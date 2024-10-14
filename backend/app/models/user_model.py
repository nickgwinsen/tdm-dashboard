from typing import Optional, Annotated
from pydantic import BeforeValidator, BaseModel, Field, EmailStr


PyObjectId = Annotated[str, BeforeValidator(str)]


class UserModel(BaseModel):
    """
    A User record.
    """

    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    email: EmailStr = Field(...)
    hashed_password: str = Field(...)
