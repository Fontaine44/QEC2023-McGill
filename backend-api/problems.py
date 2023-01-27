import database


def create_problem(data):
    database.insert(data, "reports")


def get_problems():
    return database.database_find({}, "reports")