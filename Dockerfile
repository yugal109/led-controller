# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


RUN npm run build

# Expose the port your app will run on (change 3000 if needed)
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
