from typing import Optional, Annotated
from enum import Enum
from pydantic import BeforeValidator, EmailStr
from odmantic import Field, Model, EmbeddedModel
from datetime import datetime


class Address(EmbeddedModel):
    Name: str = Field(...)
    Address: str = Field(...)
    Address2: str
    City: str = Field(...)
    State: str = Field(...)
    Zip: str


class ReviewData(Model):
    EntityID: str = Field(...)
    Address: Address
    AuthorName: str = Field(...)
    Review: str
    ReviewDate: str = Field(...)
    Rating: int
    Site: str = Field(...)
    URL: str = Field(...)
    District: str = Field(...)

    model_config = {"collection": "ReviewData"}
