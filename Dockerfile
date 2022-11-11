FROM node
WORKDIR /app
ADD package.json ./
RUN npm install
ADD . ./
RUN npm run build
CMD npm run start
