import pymongo
import json


conn_str = "mongodb://root:rEw9KtTCSEyVtao4inVM@3.22.17.77:27017/"

def database_find(query, col):
    with pymongo.MongoClient(conn_str) as client:

        mydb = client["cqi_db"]
        mycol = mydb[col]

        mydoc = mycol.find(query, {"_id": False})

        mylist = [x for x in mydoc]

        return mylist