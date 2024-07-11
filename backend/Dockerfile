FROM ubuntu:24.04

WORKDIR /app

ENV DEBIAN_FRONTEND noninteractive
ENV PYTHONPATH .

RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository 'ppa:deadsnakes/ppa' && \
    apt install -y wget python3.11 python3.11-dev && \
    apt-get clean cache

RUN wget https://bootstrap.pypa.io/get-pip.py
RUN python3.11 get-pip.py

# Clean up the downloaded script
RUN rm get-pip.py

# OpenCV requirements
RUN python3.11 -m pip install --upgrade pip==23.3.2


ENV PYTHONDONTWRITEBYTECODE 1 

COPY ./requirements.txt /requirements.txt

ENV API_ENV DEV

RUN python3.11 -m pip install -r /requirements.txt

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh

CMD [ "/entrypoint.sh" ]