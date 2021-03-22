from fastapi import FastAPI
from starlette.staticfiles import StaticFiles

app = FastAPI()

app.mount("/", StaticFiles(directory='web/dist', html=True), name="dist")


def main():
    from uvicorn import run
    run(app, host='0.0.0.0', port=5000)

if __name__ == '__main__':
    main()