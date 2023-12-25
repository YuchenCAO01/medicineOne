#!/bin/bash

# Function to check if a service is active
check_service() {
    service=$1
    if ! systemctl is-active --quiet $service; then
        echo "$service is not running, starting it..."
        systemctl start $service
    else
        echo "$service is running."
    fi
}

# Function to create swap space
create_swap() {
    echo "Creating 3GB swap space..."
    dd if=/dev/zero of=/mnt/swap bs=1024 count=3194304
    mkswap /mnt/swap
    swapon /mnt/swap
    echo "/mnt/swap swap swap defaults 0 0" >> /etc/fstab
    chmod 600 /mnt/swap
    mount -a
}

# Check Docker, Nginx, and MySQL services
check_service docker
check_service nginx
check_service mysql

# Check for swap space
swapsize=$(swapon --show=SIZE --noheadings --bytes | awk '{ print int($1/1024/1024) }')

if [ -z "$swapsize" ] || [ "$swapsize" -lt 3000 ]; then
    create_swap
else
    echo "Adequate swap space exists."
fi

echo "System check completed."
