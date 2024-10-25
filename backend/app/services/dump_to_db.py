import csv


from app import models
from app.db.session import db
from datetime import datetime


async def dump_to_mongo():
    file_path = "./app/utils/memorial_day.csv"
    list_of_dicts = []
    review_data_list = []
    with open(file_path, mode="r", newline="", encoding="utf-8") as csvfile:
        csvreader = csv.DictReader(csvfile)
        for row in csvreader:
            list_of_dicts.append(dict(row))
    ctr = 0
    for x in list_of_dicts:
        del x[""]
    for item in list_of_dicts:
        ctr += 1
        print(ctr)
        if await db.find_one(models.ReviewData, models.ReviewData.URL == item["URL"]):
            continue
        if item["Rating"] == "":
            item["Rating"] = 0
        if item["District"] == "":
            item["District"] = 0
        review_data = {
            "EntityID": item["Entity ID"],
            "District": item["District"],
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
            "ReviewDate": datetime.strptime(item["Review Date"], "%Y-%m-%d %I:%M %p"),
            "Rating": int(float(item["Rating"])),
            "URL": item["URL"],
            "District": int(float(item["District"])),
        }
        review_data_list.append(models.ReviewData(**review_data))
    await db.save_all(review_data_list)
