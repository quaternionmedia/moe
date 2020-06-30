import logging
from pprint import pprint

def getLogger(name='moe'):
    logname = name+'.log'

    # set up logging to file - see previous section for more details
    logging.basicConfig(level=logging.DEBUG,
                        format="{'time':'%(asctime)s', 'name':'%(name)s', 'level':'%(levelname)s', 'message':'%(message)s'}",
                        datefmt='%Y-%m-%d|%H:%M:%S',
                        filename=f'logs/{logname}',
                        filemode='a')

    # define a Handler which writes INFO messages or higher to the sys.stderr
    console = logging.StreamHandler()
    console.setLevel(logging.DEBUG)

    # set a format which is simpler for console use
    formatter = logging.Formatter('%(name)-6s: %(levelname)-8s %(message)s')

    # tell the handler to use this format
    console.setFormatter(formatter)

    # add the handler to the root logger
    rootlog = logging.getLogger('')
    rootlog.addHandler(console)


    rlog = logging.getLogger(logname)
    return rlog

def main():
    log = getLogger()
    log.debug('Quick zephyrs blow, vexing daft Jim.')
    log.info('How quickly daft jumping zebras vex.')
    log.warning('Jail zesty vixen who grabbed pay from quack.')
    log.error('The five boxing wizards jump quickly.')
    log.critical('oh no')


if __name__ == '__main__':
    main()
