# Stage 1: Build the React app using Vite
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (important for installing dependencies)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files (like src, public, etc.)
COPY . .

# Build the application using Vite
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine

# Copy the build output from Vite (dist folder) to the Nginx web server
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

