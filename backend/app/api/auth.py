from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from sqlalchemy import text, select
from sqlalchemy.orm import Session

from app.db.session import SessionDep, get_session
from app.etc.crypt import hash_password
from app.models.user_model import *
from app.schemas.user_schema import UserIn, UserOut

router = APIRouter()


@router.post("/login")
async def auth_login(user: UserIn, db: SessionDep):
    user_hash = hash_password(user.password)
    user_to_verify = select(Users).where(Users.email == user.email)
    result = db.exec(user_to_verify).scalars().all()
    return jsonable_encoder(result)


@router.post("/signup")
async def auth_signup(user: UserIn, db: SessionDep):
    user_hash = hash_password(user.password)
    user_to_add = Users(email=user.email, **user_hash)
    db.add(user_to_add)
    db.commit()
    db.refresh(user_to_add)
    return user_to_add.email


@router.patch("/enable-two-factor")
async def auth_login(db: Session = Depends(get_session)):
    return {"db_version": db.execute(text("SELECT version();")).scalar()}
