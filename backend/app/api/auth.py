from fastapi import APIRouter, HTTPException
from fastapi.encoders import jsonable_encoder

from app.etc.crypt import hash_password
from app.models import UserModel
from app.schemas.user_schema import UserIn, UserOut

router = APIRouter()

from app.db.session import db


@router.post("/login")
async def auth_login(user: UserIn):
    # user_hash = hash_password(user.password)
    # user_to_verify = select(Users).where(Users.email == user.email)
    # result = db.exec(user_to_verify).scalars().all()
    print(db.__getstate__())


@router.post("/signup")
async def auth_signup(user: UserIn):
    if await db.find_one(UserModel, UserModel.email == user.email):
        raise HTTPException(status_code=400, detail="Email already exists")

    user_to_add = UserModel(
        email=user.email, hashed_password=hash_password(user.password)
    )

    db.save(user_to_add)

    return user_to_add.email


#
# @router.patch("/enable-two-factor")
# async def auth_login(db: Session = Depends(get_session)):
#     return {"db_version": db.execute(text("SELECT version();")).scalar()}
