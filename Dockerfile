FROM ubuntu:17.10 as builder
RUN apt-get update && apt-get install curl && curl -sL https://deb.nodesource.com/setup_4.x | bash && apt-get install nodejs
COPY package.json  ./

RUN npm install --unsafe-perm && npm -g config set user root

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN  apt-get install  python make g++ && npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app && npm i -g ionic@latest @ionic/app-scripts@latest cordova

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
# RUN ionic cordova platform add browser
# RUN ionic cordova build browser

FROM nginx:latest

## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/platforms/browser /usr/share/nginx/html
RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
CMD ["nginx", "-g", "daemon off;"]