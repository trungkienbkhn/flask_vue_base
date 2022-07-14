from flask import Flask, Blueprint


app = Flask(__name__)
bp = Blueprint('static', __name__, static_folder='../views/dist', template_folder='../views')
app.register_blueprint(bp)
