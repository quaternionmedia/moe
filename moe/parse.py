from lark import Lark
import os

larkpath = '/home/pk/repos/lark'

parser = Lark(open(os.path.join(larkpath, 'examples/lark.lark')), parser="lalr")

grammar_files = [
    os.path.join(larkpath, 'examples/python2.lark'),
    os.path.join(larkpath, 'examples/python3.lark'),
    os.path.join(larkpath, 'examples/lark.lark'),
    os.path.join(larkpath, 'examples/relative-imports/multiples.lark'),
    os.path.join(larkpath, 'examples/relative-imports/multiple2.lark'),
    os.path.join(larkpath, 'examples/relative-imports/multiple3.lark'),
    # 'lark/grammars/common.lark',
]

def parseGrammar():
    for grammar_file in grammar_files:
        grammarTree = parser.parse(open(grammar_file).read())
    return grammarTree

def checkType(data):
    return type(data)


if __name__ == '__main__':
    parseGrammar()
