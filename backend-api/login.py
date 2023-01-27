import database

def get_user(username):
    query = {"id": username}

    return database.database_find(query)

