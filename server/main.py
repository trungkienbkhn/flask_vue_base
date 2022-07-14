import time
from flask import render_template
from dotenv import dotenv_values

from server.app import app
from server.api import get_status


# @app.errorhandler(404)
@app.route('/', defaults={'path': ''}, methods=['GET'])
@app.route('/<path:path>', methods=['GET'])
def index(path):
    config = dotenv_values('.env')
    unix_time = int(time.time())
    return render_template('index.html', title=config['APP_TITLE'], unixtime=unix_time)
