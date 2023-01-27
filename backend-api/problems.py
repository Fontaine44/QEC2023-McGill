import database


def create_problem(data):
    list = database.database_find(data, "reports")
    if len(list)>0:
        return False
    database.insert(data, "reports")
    return True


def get_problems():
    return database.database_find({}, "reports")