from flask import Flask, request, jsonify
from flask_cors import CORS
import users
import objs
import problems
import tasks
import json

app = Flask(__name__)
CORS(app)

# Auth/Users

# Login a user
@app.route('/login', methods=["POST"])
def login_user():
    data = json.loads(request.data)
    status, payload = users.login(data)
    if status:
        return jsonify(payload)
    else:
        return "Unauthorized", 403


# Set the password on first login
@app.route('/users/set', methods=["POST"])
def set_password():
    data = json.loads(request.data)
    payload = users.set_password(data)
    return jsonify(payload)

# Create a user
@app.route('/users/create', methods=["POST"])
def create_user():
    data = json.loads(request.data)
    status = users.create_user(data)
    if status:
        return "success", 200
    else:
        return "Already exists", 400

# Get all users
@app.route('/users', methods=["GET"])
def get_users():
    payload = users.get_users()
    return jsonify(payload)


# Objects

# Get lost objects
@app.route('/objects/lost', methods=["GET"])
def get_lost():
    payload = objs.get_lost()
    return jsonify(payload)

# Get found objects
@app.route('/objects/found', methods=["GET"])
def get_found():
    payload = objs.get_found()
    return jsonify(payload)

# Get all objects
@app.route('/objects/all', methods=["GET"])
def get_all_objs():
    payload = objs.get_all()
    return jsonify(payload)

# Create an object
@app.route('/objects/create', methods=["POST"])
def create_object():
    data = json.loads(request.data)
    status = objs.create_object(data)
    if status:
        return "success", 200
    else:
        return "Already exists", 400

# Delete an object
@app.route('/objects/delete', methods=["POST"])
def delete_object():
    data = json.loads(request.data)
    payload = objs.delete_object(data)
    return jsonify(payload)


# Problems

# Create a new problem
@app.route('/problems/create', methods=["POST"])
def create_problem():
    data = json.loads(request.data)
    status = problems.create_problem(data)
    if status:
        return "success", 200
    else:
        return "Already exists", 400

# Get all problems
@app.route('/problems', methods=["GET"])
def get_problems():
    payload = problems.get_problems()
    return jsonify(payload)



# Tasks

# Create a new task
@app.route('/tasks/create', methods=["POST"])
def create_task():
    data = json.loads(request.data)
    status = tasks.create_task(data)
    if status:
        return "success", 200
    else:
        return "Already exists", 400

# Update a task
@app.route('/tasks/update', methods=["POST"])
def update_task():
    data = json.loads(request.data)
    payload = tasks.update_task(data["old"], data["new"])
    return jsonify(payload)

# Delete a task
@app.route('/tasks/delete', methods=["POST"])
def delete_task():
    data = json.loads(request.data)
    payload = tasks.delete_task(data)
    return jsonify(payload)

# Get all tasks
@app.route('/tasks', methods=["POST"])
def get_tasks():
    data = json.loads(request.data)
    payload = tasks.get_tasks(data)
    return jsonify(payload)

# Get all tasks
@app.route('/tasks/all', methods=["GET"])
def get_all_tasks():
    payload = tasks.get_all_tasks()
    return jsonify(payload)
