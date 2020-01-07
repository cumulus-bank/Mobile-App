# FROM ubuntu:18.04 as builder
# USER root
# WORKDIR /ng-app
# COPY . .
# RUN apt-get update
# RUN apt-get -y install curl gnupg
# RUN curl -sL https://deb.nodesource.com/setup_11.x  | bash -
# RUN apt-get -y install nodejs build-essential
# RUN npm install --unsafe-perm && npm -g config set user root
# RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
# ## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
# RUN  apt-get install  python make g++ && npm i  && cp -R ./node_modules ./ng-app && npm i -g ionic@latest  @ionic/app-scripts@latest cordova@latest
# ## Build the angular app in production mode and store the artifacts in dist folder
# RUN ionic cordova platform add browser
# RUN ionic cordova build browser

FROM nginx:latest
USER root
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY . .
## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY  platforms/browser /usr/share/nginx/html
RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx
CMD ["nginx", "-g", "daemon off;"]