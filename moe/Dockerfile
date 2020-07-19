FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7-alpine3.8
RUN pip install -U pip
COPY requirements.txt /
RUN pip install -r /requirements.txt

ENTRYPOINT ["/start-reload.sh"]
