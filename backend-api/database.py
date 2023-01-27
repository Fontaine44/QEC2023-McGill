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


def update(filter, new_value, col):
    with pymongo.MongoClient(conn_str) as client:

        mydb = client["cqi_db"]
        mycol = mydb[col]

        mycol.update_one(filter, new_value)


def insert(new_value, col):
    with pymongo.MongoClient(conn_str) as client:

        mydb = client["cqi_db"]
        mycol = mydb[col]

        mycol.insert_one(new_value)


def delete(query, col):
    with pymongo.MongoClient(conn_str) as client:

        mydb = client["cqi_db"]
        mycol = mydb[col]

        mycol.delete_one(query)