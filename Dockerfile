FROM node:18-alpine
WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
RUN npx prisma generate
# Add a script to handle migrations and start the app
COPY start.sh .
RUN chmod +x start.sh
EXPOSE 8001
CMD ["./start.sh"]