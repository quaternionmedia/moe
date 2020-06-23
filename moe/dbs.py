from tinydb import TinyDB, Query
from pprint import pprint
from diagnostics import t

db = TinyDB('main.json')
q = Query()


def insert(data, fn=None):
    db.insert({
        "datetime":t,
        "data":data,
        "command":fn})

def search(data):
    print(db.search(q.data == data))

def clearDb():
    db.purge()

def printDb():
    pprint(db.all())
