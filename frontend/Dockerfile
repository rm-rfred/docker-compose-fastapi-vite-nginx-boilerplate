FROM node:21

WORKDIR /app

COPY package*.json /app/

COPY ./ /app/

ARG FRONTEND_ENV=production

ENV VITE_APP_ENV=${FRONTEND_ENV}

COPY ./entrypoint.sh /entrypoint.sh

RUN chmod 755 /entrypoint.sh

CMD [ "/entrypoint.sh" ]