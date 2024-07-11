FROM node:21 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod 755 /entrypoint.sh
CMD [ "/entrypoint.sh" ]