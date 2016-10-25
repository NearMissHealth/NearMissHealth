import sys
import logging
logging.basicConfig(filename='nm.log', level=logging.INFO)
from app import app as application

if __name__ == "__main__":
    logging.info(application.run())
