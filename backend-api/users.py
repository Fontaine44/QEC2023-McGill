import database
import smtplib
from email.message import EmailMessage
import random
import string
from random import randint

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
    newvalues = {"$set": data}
    database.update(filter, newvalues, "users")
    
def create_user(data):
    list = database.database_find(data, "users")
    if len(list)>0:
        return False
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for i in range(8)) 
    userId = 'user-'+str(randint(10000,99999))
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login('FlackEvenTask@gmail.com', 'aqppxqoobrdlgbte')
    msg = EmailMessage()
    msg.set_content('Hello '+data["firstname"]+' '+data["lastname"]+', \nCreate your EvenTask account at "https://www.google.com/". \nUsername: '+userId+ ' \nTemporary password: '+password) #Sujet du email
    msg['Subject'] = 'Create EvenTask account' #Email Subject
    msg['From'] = 'FlackEvenTask@gmail.com'
    msg['To'] = data["address"]

    server.send_message(msg)
    data["password"]=password
    data["id"] = userId
    data["firstLogin"] = False
    database.insert(data, "users")
    return True
    
def get_users():
    list =  database.database_find({}, "users")
    return list
    
        
    

