#!/bin/bash

# Directory where your Dockerfile is located for the backend
DOCKERFILE_DIR="medicine-one-backend"

# Image name and tag for the backend
IMAGE_NAME="yuchencao01/medione-backend"
TAG="v1"

# Change to the directory with the Dockerfile
cd ..
cd $DOCKERFILE_DIR

# Build the Docker image
echo "Building Docker image for backend..."
docker build -t $IMAGE_NAME:$TAG .

echo "Docker image for backend build process completed."
