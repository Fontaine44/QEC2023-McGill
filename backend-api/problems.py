import database, users
from twilio.rest import Client



def create_problem(data):
    list = database.database_find(data, "reports")
    if len(list)>0:
        return False
    
    if data["priority"] == "1":
        account_sid = "AC7ea49dde3a5ccc0beecd02dc51ffebad"
        auth_token = "d3b4afe1425bb4aeb9aaec8953215d2b"
        client = Client(account_sid, auth_token)
        list = database.database_find({"phone": {"$exists": "true"}}, "users")
        for user in list:
            message = client.messages.create(
            body=data["name"]+ '!: '+ data["description"],
            from_="+15644647446",
            to=user["phone"]
            )
            message.sid
    database.insert(data, "reports")
    return True


def get_problems():
    return database.database_find({}, "reports")