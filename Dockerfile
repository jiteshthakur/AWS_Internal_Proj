# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
RUN ls -al

# Build the application
RUN npm run build

# Debug: Check if the build command was successful
#RUN echo "Build command finished"

# Debug: List files in the /app directory to check if build directory exists
RUN ls -la /app

# Install nginx
RUN apt-get update && apt-get install -y nginx

# Remove default nginx website
RUN rm -rf /var/www/html/*
RUN cd /app/dist
RUN cp -r /app/dist/* /var/www/html
RUN ls -al /var/www/html

# Copy the built files to nginx's default directory
#COPY /app/dist/index.html /var/www/html

# Expose port 80 to the outside world
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
