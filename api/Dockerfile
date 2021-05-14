FROM python:3.8.6-slim-buster

ENV PYTHONUNBUFFERED=1

RUN ln -snf /usr/share/zoneinfo/Asia/Tehran /etc/localtime \
&& echo Asia/Tehran > /etc/timezone

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip && pip install -r requirements.txt

WORKDIR /jugspeed-api/

COPY . /jugspeed-api/

ENTRYPOINT [ "/bin/bash", ".run.sh" ]
