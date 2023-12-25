#!/bin/bash

# Frontend Docker configuration
FRONTEND_IMAGE="yuchencao01/medione-frontend:v1"
FRONTEND_CONTAINER_NAME="medione-frontend-container"
FRONTEND_PORT_MAPPING="8000:80"  # Maps host port 8081 to container port 80

# Backend Docker configuration
BACKEND_IMAGE="yuchencao01/medione-backend:v1"
BACKEND_CONTAINER_NAME="medione-backend-container"
BACKEND_PORT_MAPPING="8001:8081"  # Maps host port 8080 to container port 8082

# Stop and remove existing containers (if any)
echo "Stopping and removing existing Docker containers..."
docker stop $FRONTEND_CONTAINER_NAME
docker rm $FRONTEND_CONTAINER_NAME
docker stop $BACKEND_CONTAINER_NAME
docker rm $BACKEND_CONTAINER_NAME

# Pull latest images
# echo "Pulling latest Docker images..."
# docker pull $FRONTEND_IMAGE
# docker pull $BACKEND_IMAGE

# Run frontend container
echo "Starting frontend container..."
docker run -d --name $FRONTEND_CONTAINER_NAME -p $FRONTEND_PORT_MAPPING $FRONTEND_IMAGE

# Run backend container
echo "Starting backend container..."
docker run -d --name $BACKEND_CONTAINER_NAME -p $BACKEND_PORT_MAPPING $BACKEND_IMAGE

echo "Docker containers are up and running."
