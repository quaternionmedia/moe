import logging
import sys
from time import strftime
import subprocess as sp
import json
from pprint import pprint, pformat
# from moe.speech import say

###neet gtts-cli and sox
# @dependsOn()

timestr = strftime('%Y%m%d-%H%M%S')
txtlog = f'output/texts/{timestr}.txt'

defaultlang = 'en-uk'
audiolog = f'output/audios/{timestr}_audiolog.mp3'

logger = logging.getLogger('moe')

def init():
    startLogging()

def dataLog(m,fileout=txtlog,save=True,verbose=True):
    logger.info(m)
    if(verbose):
        print(m)

def log(m,save=True,audio=False,lang=defaultlang,data={},verbose=True):
    if(save):
        dataLog(pformat(data), verbose)
    # if(audio):
    #     say(m)
    if(verbose):
        print(m)
    return True


def startLogging():

    logger.setLevel(logging.INFO)

    syshandler = logging.StreamHandler(sys.stdout)
    syshandler.setLevel(logging.INFO)

    # filehandler = logging.FileHandler(txtlog)
    # filehandler.setLevel(logging.INFO)

    formatter = logging.Formatter("{'logtime':'%(asctime)s', 'logname':%(name)s, 'levelname':%(levelname)s, 'message':%(message)s")
    syshandler.setFormatter(formatter)
    # filehandler.setFormatter(formatter)

    logger.addHandler(syshandler)
    # logger.addHandler(filehandler)

# def main():
#     say('one starting')
#     init()
#     say('two booting complete')

    # say('nu pratar vi svenska', lang='sv')

#
if __name__ == '__main__':
#     main()
# else:
    init()
