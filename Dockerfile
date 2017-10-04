FROM node:boron
# Create app directory
RUN mkdir -p /usr/app/

# Set Timezone
# ENV TZ CST6CDT
# RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Bundle app source
COPY ./express/ /usr/app/express/
EXPOSE 8080

WORKDIR /usr/app/express/

RUN npm install

CMD [ "npm", "start" ]