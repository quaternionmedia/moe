import os
import subprocess as sp

from log import getLogger
log = getLogger('osing')

def read(path):
    log.info('reading ' + path)
    with open(path) as file:
        file_contents = file.read()

        #parse
        return file_contents

def mkdir(path: str):
    log.debug(f'os.path.exists(path):{os.path.exists(path)}')
    if not os.path.exists(path):
        os.makedirs(path)


def dependsOn(name):
    def wrapper_dependsOn(*args, **kwargs):
        try:
            result = sp.run(f'which {args[0]}', capture_output=True)
        except Exception as e:
            raise
        print(result.stdout)
        print(result.stderr)
        return wrapper_dependsOn

def main():
    # dependsOn('ls')
    result = sp.run(f'which ls', capture_output=True)
    print(result)

if __name__ == '__main__':
    # main()
    read('logs/moe.log')
