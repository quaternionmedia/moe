"""Main module."""
from osing import mkdir
from validate import parseGrammar
from pprint import pprint
from log import log, startLogging

parser = parseGrammar()

def initDirs():
    mkdir('output')
    mkdir('output/audios')
    mkdir('output/texts')

def init():
    initDirs()
    startLogging()

def moe():
    init()
    # pprint(parser)
    log(f'parser is :\n{parser}')

if __name__ == '__main__':
    moe()
