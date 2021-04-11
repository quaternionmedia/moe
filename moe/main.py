from fastapi import FastAPI
from starlette.staticfiles import StaticFiles
from config import WEB_DIST

app = FastAPI()

app.mount('/', StaticFiles(directory=WEB_DIST, html=True), name='dist')


def main():
    from uvicorn import run
    run(app, host='0.0.0.0', port=5000)

if __name__ == '__main__':
    main()