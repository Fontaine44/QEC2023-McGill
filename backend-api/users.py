import database

def login(data):
    query = {"id": data["id"]}
    list = database.database_find(query, "users")
    if len(list) == 0:
        return False, None
    else:
        for user in list:
            if user["password"] == data["password"]:
                return True, user
            else:
                return False, None
            
def set_password(data):
    filter = {"id": data["id"]}
    newvalues = {"$set": { "password": data["password"] }}
    database.update(filter, newvalues, "users")
    
def create_user(data):
    mydict = {"id": data["id"], "password": data["password"], "firstname": data["firstname"], "lastname": data["lastname"], "age": data["age"], "firstlogin": True, "type": data["type"]}
    database.insert(mydict, "users")
    
def get_users():
    return database.database_find({}, "users")
    

