FROM nginx:alpine AS base
WORKDIR /usr/share/nginx/html

FROM node:20.18.1-alpine3.19 AS build
WORKDIR /build
COPY package.json /build/package.json
COPY package-lock.json /build/package-lock.json
RUN npm ci
COPY . .
RUN npm run build

FROM base AS deploy
COPY --from=build /build/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /build/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
