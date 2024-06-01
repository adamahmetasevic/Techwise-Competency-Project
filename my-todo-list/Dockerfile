FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=0 /usr/src/app/dist /usr/share/nginx/html

# Expose port 80 
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
