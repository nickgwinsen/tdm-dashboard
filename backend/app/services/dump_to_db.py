import csv


from app import models
from app.db.session import db


async def dump_to_mongo():
    file_path = "./app/utils/memorial_day.csv"
    list_of_dicts = []

    with open(file_path, mode="r", newline="", encoding="utf-8") as csvfile:
        csvreader = csv.DictReader(csvfile)
        for row in csvreader:
            list_of_dicts.append(dict(row))

    for x in list_of_dicts:
        del x[""]
    for item in list_of_dicts:
        if await db.find_one(models.ReviewData, models.ReviewData.URL == item["URL"]):
            continue
        if item["Rating"] == "":
            item["Rating"] = 0
        review_data = {
            "EntityID": item["Entity ID"],
            "Address": {
                "Name": item["Name"],
                "Address": item["Address"],
                "Address2": item["Address 2"],
                "City": item["City"],
                "State": item["State"],
                "Zip": item["ZIP"],
            },
            "Site": item["Site"],
            "AuthorName": item["Author Name"],
            "Review": item["Review"],
            "ReviewDate": item["Review Date"],
            "Rating": int(float(item["Rating"])),
            "URL": item["URL"],
            "District": item["District"],
        }
        await db.save(models.ReviewData(**review_data))
