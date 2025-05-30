# Build stage
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Build arguments for version injection
ARG BUILD_NUMBER=0
ARG GIT_COMMIT=unknown
ARG GIT_BRANCH=unknown
ARG BUILD_TIMESTAMP

# Set environment variables
ENV BUILD_NUMBER=$BUILD_NUMBER
ENV GIT_COMMIT=$GIT_COMMIT
ENV GIT_BRANCH=$GIT_BRANCH
ENV BUILD_TIMESTAMP=$BUILD_TIMESTAMP

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Generate version information and build
RUN npm run build:version

# Production stage
FROM nginx:1.21-alpine

# Copy built app to nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add labels for image metadata
ARG BUILD_NUMBER=0
ARG GIT_COMMIT=unknown
ARG GIT_BRANCH=unknown
ARG BUILD_TIMESTAMP

LABEL build.number=$BUILD_NUMBER
LABEL git.commit=$GIT_COMMIT
LABEL git.branch=$GIT_BRANCH
LABEL build.timestamp=$BUILD_TIMESTAMP

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]