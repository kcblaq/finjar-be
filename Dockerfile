FROM node:18-alpine
WORKDIR /src
COPY package*.json ./
RUN npm install
RUN npx prisma generate
COPY . .
EXPOSE 8001
CMD ["npm", "run", "dev"]