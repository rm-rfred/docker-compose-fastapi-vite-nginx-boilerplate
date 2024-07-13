FROM node:21 AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -
COPY ./ /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY ./prod.entrypoint.sh /prod.entrypoint.sh

RUN pnpm install --global --verbose serve@14.2.3
RUN pnpm run build

RUN chmod 755 /prod.entrypoint.sh
CMD [ "/prod.entrypoint.sh" ]