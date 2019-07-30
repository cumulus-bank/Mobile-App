FROM node:8-alpine as builder

COPY package.json  ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN  apk add --no-cache --virtual .gyp python make g++ && npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app && npm i -g ionic cordova

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN ionic cordova build browser

FROM bitnami/nginx

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/platforms/browser /usr/share/nginx/html

RUN groupadd -g 999 appuser && \
    useradd -r -u 999 -g appuser appuser
USER appuser
CMD ["nginx", "-g", "daemon off;"]