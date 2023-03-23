FROM node:latest as NODE_BUILD

COPY *.json ./
RUN npm install --silent

COPY ./ ./
RUN npm run build

FROM nginx:latest
COPY --from=NODE_BUILD /build /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
