from datetime import datetime, timedelta


import bcrypt
from jose import jwt, JWTError
from app import models
from pydantic import ValidationError
from typing import Any, Union
from fastapi import status, HTTPException

from app.config import variables


ALGORITHM = "HS256"


def create_access_token(
    subject: Union[str, Any], expires_delta: timedelta = None
) -> str:
    """
    Create an access token for a user.

    Args:
        subject (Union[str, Any]): The subject of the token.
        expires_delta (timedelta, optional): The time delta for the token to expire. Defaults to None.

    Returns:
        str: The encoded JWT token.
    """

    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(
            minutes=variables.ACCESS_TOKEN_EXPIRE_MINUTES
        )
    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, variables.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def decode_access_token(token: str) -> models.Token:
    """
    Decode an access token.

    Args:
        token (str): The token to decode.

    Returns:
        str: The decoded token.
    """

    try:
        payload = jwt.decode(token, variables.SECRET_KEY, algorithms=[ALGORITHM])
        token_data = models.Token(**payload)
        return token_data
    except (JWTError, ValidationError):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Could not validate credentials",
        )


def hash_password(password: str) -> str:
    bytes = password.encode("utf-8")
    salt = bcrypt.gensalt()
    hash = bcrypt.hashpw(bytes, salt)
    return hash.decode("utf-8")


def verify_password(plain_password, hash_password) -> bool:
    bytes = plain_password.encode("utf-8")
    return bcrypt.checkpw(bytes, hash_password.encode("utf-8"))
