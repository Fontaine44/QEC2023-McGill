from flask import Flask, request, jsonify
from flask_cors import CORS
import users
import json

app = Flask(__name__)
CORS(app)

# Auth/Users

# Login a user
@app.route('/login', methods=["POST"])
def login_user():
    data = json.loads(request.data)
    payload = users.login(data)
    return jsonify(payload)


# Set the password on first login
@app.route('/login', methods=["POST"])
def login_user():
    data = json.loads(request.data)
    payload = users.get_user(data)
    return jsonify(payload)

