import database


def create_task(data):
    list = database.database_find(data, "tasks")
    if len(list)>0:
        return False
    database.insert(data, "tasks")
    return True

def update_task(data, new_data):
    database.update(data, { "$set": new_data}, "tasks")


def delete_task(data):
    database.delete(data, "tasks")