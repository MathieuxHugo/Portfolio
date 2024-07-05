# Stage 1: Build the Angular application
FROM node:20 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --omit=dev
# Stage 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular application from the build stage
COPY --from=build /app/dist/portfolio/browser /usr/share/nginx/html


COPY ./nginx.conf /etc/nginx/conf.d/default.conf 

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]