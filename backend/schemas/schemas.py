from pydantic import BaseModel, EmailStr, Field


class UsersCreate(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)
