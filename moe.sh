#!/bin/bash
VERSION=0.0.1
if [ $1 = "version" -o $1 = "v" -o $1 = "-v" ]; then
  echo $VERSION
elif [ $1 = "init" ]; then
  shift
  pip install -r requirements.txt
  docker run -it -v $(pwd)/web:/app -w /app node:current-alpine yarn install
  
elif [ $1 = "install" -o $1 = "i" ]; then
  shift
  docker run -it -v $(pwd)/web:/app -w /app node:current-alpine yarn add "$@"

elif [ $1 = "build" ]; then
  docker run -it -v $(pwd)/web:/app -w /app -p 5555:5555 node:current-alpine yarn parcel watch --no-cache --port 5555 src/index.html

elif [[ $1 = "run" || $1 =~ "serve" ]]; then
  # moe
  uvicorn --reload --host 0.0.0.0 --port 5000 main:app

fi
