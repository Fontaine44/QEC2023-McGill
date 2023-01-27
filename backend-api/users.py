import database

def login(username):
    query = {"id": username}

    return database.database_find(query, "users")

