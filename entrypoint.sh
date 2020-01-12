#!/bin/sh

ROOT_DIR=/usr/share/nginx/html
#ROOT_DIR=dist

echo "Replacing env constants in PHP"

php prepare_env.php

echo "Starting Nginx"
nginx -g 'daemon off;'
