# Use Node.js as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port for Vite Dev Server (usually 5173)
EXPOSE 5173

# Start the development server
CMD [ "npm", "run", "dev" ]