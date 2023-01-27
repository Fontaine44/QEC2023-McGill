import database


def create_problem(data):
    mydict = {"name": data["name"],"description": data["description"],"assistance_type": data["assistance_type"]}


def get_problems():
    return database.database_find({}, "reports")