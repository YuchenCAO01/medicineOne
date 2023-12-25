#!/bin/bash

# Function to stop and remove a container
stop_and_remove_container() {
    container_name=$1
    image_name=$2

    # Check if container is running
    if [ $(docker ps -q -f name=$container_name) ]; then
        echo "Stopping and removing container $container_name..."
        docker stop $container_name
        docker rm $container_name
    else
        echo "Container $container_name is not running."
    fi

    # Check if image exists
    if [ $(docker images -q $image_name) ]; then
        echo "Removing image $image_name..."
        docker rmi $image_name
    else
        echo "Image $image_name does not exist."
    fi
}

# Check for pa-frontend-container and pa-backend-container
stop_and_remove_container "medione-frontend-container" "yuchencao01/medione-frontend:v1"
stop_and_remove_container "medione-backend-container" "yuchencao01/medione-backend:v1"

echo "Process completed."
