FROM ubuntu:24.04

WORKDIR /app

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository 'ppa:deadsnakes/ppa' && \
    apt install -y wget python3.11 python3.11-dev && \
    apt-get clean cache

RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3.11 get-pip.py
RUN rm get-pip.py

RUN python3.11 -m pip install --upgrade pip==24.1.2
COPY ./requirements.txt /requirements.txt
RUN python3.11 -m pip install -r /requirements.txt

COPY ./static /static

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh

CMD [ "/entrypoint.sh" ]