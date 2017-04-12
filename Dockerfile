FROM node:6
MAINTAINER zhoucaiguang@gmail.com

RUN mkdir -p /www/jenkines-express/

COPY ./ /www/jenkines-express/
WORKDIR /www/jenkines-express/

#RUN npm install --registry=https://registry.npm.taobao.org
RUN npm install
EXPOSE 3000


CMD ["npm","start"]
