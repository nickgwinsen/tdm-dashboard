from fastapi import APIRouter, HTTPException
from app.etc import crypt
from app import models
from app import schemas


router = APIRouter()

from app.db.session import db


@router.post("/login")
async def auth_login(user: schemas.UsersCreate):
    user_to_verify = await db.find_one(
        models.UsersModel, models.UsersModel.email == user.email
    )
    print(user_to_verify)
    verified = crypt.verify_password(user.password, user_to_verify.hashed_password)
    if not verified:
        raise HTTPException(status_code=400, detail="Incorrect password")
    return crypt.create_access_token(user.email)


@router.post("/signup", response_model=models.Token)
async def auth_signup(user: schemas.UsersCreate):
    if await db.find_one(models.UsersModel, models.UsersModel.email == user.email):
        raise HTTPException(status_code=400, detail="Email already exists")

    user_to_add = models.UsersModel(
        email=user.email, hashed_password=crypt.hash_password(user.password)
    )

    await db.save(user_to_add)

    return crypt.create_access_token(user.email)
    # store the token in the localstorage on frontend when you login
    # then it will be in the headers when request is made


#
# @router.patch("/enable-two-factor")
# async def auth_login(db: Session = Depends(get_session)):
#     return {"db_version": db.execute(text("SELECT version();")).scalar()}
