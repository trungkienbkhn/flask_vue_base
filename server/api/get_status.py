from flask import make_response, jsonify
from server.utils.mongo_database import mongodb_client
from server.app import app


# Get app status
@app.route('/api/status', methods=['GET'])
def api_get_status():
    try:
        mongo_info = mongodb_client.get_server_info()
    except:
        mongo_info = None

    result = {
        'server': 'ok',
        'mongodb': 'ok' if mongo_info is not None and mongo_info.get('ok') else 'failed'
    }

    return make_response(jsonify({"data": result}), 200)
