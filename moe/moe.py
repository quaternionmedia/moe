"""Main module."""
from moe.osing import mkdir

def initDirs():
    mkdir('output')
    mkdir('output/audios')
    mkdir('output/texts')

def moe():
    initDirs()

if __name__ == '__main__':
    moe()
