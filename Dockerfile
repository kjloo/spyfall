# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) first for caching dependencies
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Open the necessary port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]
