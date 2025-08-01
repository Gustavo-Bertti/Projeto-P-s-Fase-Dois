FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build        
RUN apk add --no-cache postgresql-client

EXPOSE 3000

CMD ["npm", "start"]