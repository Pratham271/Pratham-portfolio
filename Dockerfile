FROM oven/bun:1.3.11

WORKDIR /pratham/src/app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

CMD [ "bun", "run", "dev" ]
