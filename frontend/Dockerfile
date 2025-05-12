# Use Node.js 20 image
FROM node:20

# Set working directory
WORKDIR /app

# Install global npm dependencies (optional)
RUN npm install -g npm@latest

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps --no-cache

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=0 /app/dist /usr/share/nginx/html


# Expose port
EXPOSE 80

# Run the app
CMD ["nginx", "-g", "daemon off;"]
