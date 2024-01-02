# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the content of the local directory to the working directory
COPY . .

# Expose the port your app will run on
EXPOSE 3001

# Define environment variables
ENV MONGO_URI=mongodb://mongo:27017/pizza-hunt

# Download and make wait-for-it.sh executable
RUN curl -O https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x wait-for-it.sh

# CMD ["npm", "start"]
CMD ["bash", "-c", "npm install && npm start"]
