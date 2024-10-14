from fastapi import APIRouter, HTTPException
from fastapi.encoders import jsonable_encoder
from app.etc.crypt import hash_password, verify_password
from app.models.user_model import *
from app.db.session import db
from odmantic import query

router = APIRouter()

from app.db.session import db


@router.post("/login")
async def auth_login(user: UserCreate):
    user_hash = hash_password(user.password)
    user_to_verify = db.find_one(UserModel, UserModel.email == user.email)
    print(user_to_verify)
    # verified = verify_password(user.password, user_to_verify["hashed_password"])
    print("verified")


@router.post("/signup")
async def auth_signup(user: UserCreate):
    if await db.find_one(UserModel, UserModel.email == user.email):
        raise HTTPException(status_code=400, detail="Email already exists")

    user_to_add = UserModel(
        email=user.email, hashed_password=hash_password(user.password)
    )

    await db.save(user_to_add)

    return user_to_add.email


#
# @router.patch("/enable-two-factor")
# async def auth_login(db: Session = Depends(get_session)):
#     return {"db_version": db.execute(text("SELECT version();")).scalar()}
