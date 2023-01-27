import database


def create_task(data):
    mydict = {"name": data["name"], "description": data["description"],"date": data["date"],"startTime": data["endTime"],"userId": data["userId"]}
    database.insert(mydict, "tasks")

def update_task(data, new_data):
    filter = {"name": data["name"], "description": data["description"],"date": data["date"],"startTime": data["endTime"],"userId": data["userId"]}
    newvalue = {"name": new_data["name"], "description": new_data["description"],"date": new_data["date"],"startTime": new_data["endTime"],"userId": new_data["userId"]}
    database.update(filter, newvalue, "tasks")


def delete_task(data):
    query = {"name": data["name"], "description": data["description"],"date": data["date"],"startTime": data["endTime"],"userId": data["userId"]}
    database.delete(query, "tasks")