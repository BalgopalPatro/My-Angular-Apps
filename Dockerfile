FROM node:18-alpine
WORKDIR /app
COPY My-First .
RUN npm install 
CMD ["npm", "start"]
EXPOSE 3000
