FROM python:3.8.6-slim-buster

ENV PYTHONUNBUFFERED=1

RUN ln -snf /usr/share/zoneinfo/Asia/Tehran /etc/localtime \
&& echo Asia/Tehran > /etc/timezone

RUN apt-get update && apt-get install -y curl

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip && pip install -r requirements.txt

WORKDIR /jugspeed-code/

COPY . /jugspeed-code/

ENTRYPOINT [ "/bin/bash", ".run.sh" ]
