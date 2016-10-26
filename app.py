import logging
import operator
import tempfile
import json
import sys
from urllib.request import urlopen
from wsgilog import log

import requests

from flask import Flask, jsonify, redirect, url_for, request, Response
from pymongo import MongoClient
from bson import json_util

app = Flask(__name__)


# Some useful base constants (for URLS and such)
database = "localhost:27017"
logging.basicConfig(filename='prod.log', level=logging.DEBUG)

# The database instance
client = MongoClient(database)
db = client.production

# ---------------------------------
# RUNNERS, RUNTIME AND ROUTES BELOW
# ----------------------------------


@log(tohtml=True, tofile='wsgi.log', tostream=True, toprint=True)
@app.route("/api/post_request", methods=['POST'])
def take_input():
    # Sample POST:
    # {
    #        hospital: $scope.hospital,
    #        type: $scope.type,
    #        content: $scope.content,
    #        permission: $scope.permission
    # }

    # Default values for the POSTed data.
    DEFAULT_VALUES = {
        "hospital": "none",
        "type": "In-Patient"
        "content": "blah-blah",
        "permission": "false"
    }
    # content = request.get_json(force=True)
    try:
        DEFAULT_VALUES.copy().update(request.get_json(force=True))
        # submission = {
        #     "hospital": content['hospital'],
        #     "type": content['type'],
        #     "content": content['content'],
        #     "permission": content['permission']
        # }
        db.mvp.insert_one(DEFAULT_VALUES)
        logging.info("Recieved post request and inserted into the DB.")
        resp = Response(
            response="true", status=200,  mimetype="application/json")
    except:
        logging.info("Error: ", sys.exc_info()[0])
        status = sys.exc_info()[0]
        resp = Response(
            response=Status, status=200,  mimetype="application/json")
        raise
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route("/api/all_data")
def send_response():
    content = json.dumps(list(db.mvp.find({})), default=json_util.default)
    resp = resp = Response(
        response=content, status=200,  mimetype="application/json")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp


@app.route("/")
def home():
    resp = Response("")
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return redirect(url_for('static', filename='index.html'))


# -----------
# LET IT RUN!
# -----------
if __name__ == "__main__":
    logging.info(" ")
    logging.info("RRRRRR  UU   UU NN   NN NN   NN IIIII NN   NN   GGGG ")
    logging.info("RR   RR UU   UU NNN  NN NNN  NN  III  NNN  NN  GG  GG ")
    logging.info("RRRRRR  UU   UU NN N NN NN N NN  III  NN N NN GG      ")
    logging.info("RR  RR  UU   UU NN  NNN NN  NNN  III  NN  NNN GG   GG ")
    logging.info("RR   RR  UUUUU  NN   NN NN   NN IIIII NN   NN  GGGGGG ")
    logging.info(" ")
    app.run(host='0.0.0.0', port=3000)
