"""Main module."""
from osing import mkdir
from pprint import pprint

from log import getLogger
log = getLogger('moe')
#
# def initDirs():
#     mkdir('output')
#     mkdir('output/audios')
#     mkdir('output/texts')
#
# def init():
#     initDirs()

def moe():
    log.info('starting moe')


if __name__ == '__main__':
    moe()
