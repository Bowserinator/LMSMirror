from flask import Flask, render_template, request, redirect, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

login_cookie = None
app.session_cookie_name = 'dev'

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/receiver', methods=['POST'])
def postme():
    login_cookie = request.get_json()
    login_cookie = jsonify(login_cookie)
    return login_cookie

@app.route('/home')
def home():
    return render_template('place_holder.html')

@app.route('/home/courses')
def courses():
    return render_template('index.html')

@app.route('/home/annoucements')
def annoucements():
    return render_template('place_holder.html')

@app.route('/home/forum', methods=['GET','POST'])
def forum():
    if request.method == 'GET':
        return render_template('place_holder.html')
    else:
        return jsonify(request.get_json())

if __name__ == "__main__":
    app.run(debug=True)