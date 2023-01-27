import database


def get_lost():
    return database.database_find({"type": "LOST"}, "objects")


def get_found():
    return database.database_find({"type": "FOUND"}, "objects")


def create_object(data):
    database.insert(data, "objects")

def delete_object(data):
    database.delete(data, "objects")
    
def get_all():
    return database.database_find({}, "objects")