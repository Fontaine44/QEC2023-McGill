from flask import Flask, request, jsonify
from flask_cors import CORS
import login

app = Flask(__name__)
CORS(app)


@app.route('/user', methods=["POST"])
def login_user():
    data = request.json
    payload = login.get_user(data.username)
    return jsonify(payload)

