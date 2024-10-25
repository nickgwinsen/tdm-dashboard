from typing import List
from datetime import datetime
from fastapi import APIRouter, HTTPException, Query
from app import models
from app.db.session import db

router = APIRouter()


@router.get("/reviews")
async def get_reviews(
    begin_date: str | None = None,
    end_date: str | None = None,
    district_id: int | None = None,
):
    try:
        if begin_date:
            begin_date = datetime.strptime(begin_date, "%Y-%m-%d %I:%M %p")
        if end_date:
            end_date = datetime.strptime(end_date, "%Y-%m-%d %I:%M %p")
    except ValueError as e:
        raise HTTPException(status_code=400, detail=f"Invalid date format: {e}")
    if begin_date and end_date and district_id:
        reviews = await db.find(
            models.ReviewData,
            (models.ReviewData.ReviewDate > begin_date)
            & (models.ReviewData.ReviewDate < end_date)
            & (models.ReviewData.District == district_id),
        )
    elif begin_date and district_id:
        reviews = await db.find(
            models.ReviewData,
            (models.ReviewData.ReviewDate > begin_date)
            & (models.ReviewData.District == district_id),
        )
    elif end_date and district_id:
        reviews = await db.find(
            models.ReviewData,
            (models.ReviewData.ReviewDate < end_date)
            & (models.ReviewData.District == district_id),
        )
    elif district_id:
        reviews = await db.find(
            models.ReviewData, (models.ReviewData.District == district_id)
        )
    else:
        reviews = await db.find(models.ReviewData)
    if not reviews:
        raise HTTPException(status_code=404, detail="No reviews found")
    return reviews
