import database


def get_lost():
    return database.database_find({"type": "LOST"}, "objects")


def get_found():
    return database.database_find({"type": "FOUND"}, "objects")


def create_object(data):
    if data["type"] == "FOUND":
        mydict = {"name": data["name"],"description": data["description"],"lost_hour": data["lost_hour"],"type": data["type"]}
    else:
        mydict = {"name": data["name"],"description": data["description"],"find_hour": data["find_hour"],"type": data["type"], "reporter": data["reporter"]}
    database.insert(mydict, "objects")

def delete_object(data):
    query = {"name": data["name"], "description": data["description"],"type": data["type"]}
    database.delete(query, "objects")