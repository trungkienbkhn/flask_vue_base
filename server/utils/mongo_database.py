from pymongo import MongoClient
from dotenv import dotenv_values


def get_connection_uri(config):
    uri = 'mongodb://'

    uri += config['MONGO_USERNAME'] + ':' + config['MONGO_PASSWORD']
    uri += '@' + config['MONGO_HOST'] + ':' + config['MONGO_PORT']
    uri += '/' + config['MONGO_DATABASE']

    if 'MONGO_REPLICA_SET' in config and config['MONGO_REPLICA_SET'] != '':
        uri += '?replicaSet=' + config['MONGO_REPLICA_SET'] + "&"
    else:
        uri += "?"

    auth_source = config['MONGO_AUTH_SOURCE'] if "MONGO_AUTH_SOURCE" in config and config[
        'MONGO_AUTH_SOURCE'] else "admin"
    uri += "authSource=" + auth_source

    return uri


def get_connection_options(config):
    options = {}

    if 'max_pool_size' in config:
        options['maxPoolSize'] = config['max_pool_size']
    if 'min_pool_size' in config:
        options['maxPoolSize'] = config['max_pool_size']

    return options


class MongoDatabase:
    def __init__(self):
        config = dotenv_values(".env")

        self._client = MongoClient(host=get_connection_uri(config), connect=False,
                                   **get_connection_options(config))
        self._mongodb = self._client[config['MONGO_DATABASE']]

    def get_server_status(self):
        return self._mongodb.command("serverStatus")

    def get_server_info(self):
        return self._client.server_info()


mongodb_client = MongoDatabase()
