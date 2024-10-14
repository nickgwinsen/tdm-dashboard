from fastapi import APIRouter, HTTPException
from fastapi.encoders import jsonable_encoder

from app.etc import crypt
from app import models
from app.schemas.user_schema import UserIn, UserOut

router = APIRouter()

from app.db.session import db


@router.post("/login")
async def auth_login(user: UserIn):
    # user_hash = hash_password(user.password)
    # user_to_verify = select(Users).where(Users.email == user.email)
    # result = db.exec(user_to_verify).scalars().all()
    print(db.__getstate__())


@router.post("/signup", response_model=models.Token)
async def auth_signup(user: UserIn):
    if await db.find_one(models.UserModel, models.UserModel.email == user.email):
        raise HTTPException(status_code=400, detail="Email already exists")

    user_to_add = models.UserModel(
        email=user.email, hashed_password=crypt.hash_password(user.password)
    )

    await db.save(user_to_add)

    return crypt.create_access_token(user.email)


#
# @router.patch("/enable-two-factor")
# async def auth_login(db: Session = Depends(get_session)):
#     return {"db_version": db.execute(text("SELECT version();")).scalar()}
