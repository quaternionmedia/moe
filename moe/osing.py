import os
import subprocess as sp

def read(path):
    with open(path) as file:
        file_contents = file.read()

        #parse
        return file_contents

def mkdir(path: str):
    if not os.path.exists(path):
        os.makedirs(path)

# def dependsOn(name):
#     def wrapper_dependsOn(*args, **kwargs):
#         try:
#             result = sp.run(f'which {args[0]}', capture_output=True)
#         except Exception as e:
#             raise
#         print(result.stdout)
#         print(result.stderr)
#         return wrapper_dependsOn
#
# def main():
#     # dependsOn('ls')
#     result = sp.run(f'which ls', capture_output=True)
#     print(result)
#
# if __name__ == '__main__':
#     main()
