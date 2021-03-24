FROM python:rc
RUN pip install -U pip

COPY requirements.txt /moe/
RUN pip install -r /moe/requirements.txt

COPY moe /moe/moe
COPY setup.py /moe/
RUN pip install -e /moe

WORKDIR /moe/moe

EXPOSE 80
# CMD [ "/usr/local/bin/python3", "/usr/local/bin/moe" ]
ENTRYPOINT [ "/usr/local/bin/uvicorn", "moe.main:app", "--host", "0.0.0.0", "--port", "80", "--reload" ]
