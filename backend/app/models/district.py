from typing import Optional, Annotate, List
from enum import Enum
from pydantic import BeforeValidator, EmailStr
from odmantic import Field, Model, EmbeddedModel
from datetime import datetime
from app.models.review import Address


class District(Model):
    DistrictNumber: int
    locations: List[Address]

    model_config = {"collection": "Districts"}
