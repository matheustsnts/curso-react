#!/bin/bash

CONTAINER_NAME="react-aula01-app"

if docker ps -a --format '{{.Names}}' | grep -q "^$CONTAINER_NAME$"; then
    echo "O container $CONTAINER_NAME já existe."
    docker-compose up -d
else
    echo "O container $CONTAINER_NAME não existe. Criando..."
    docker-compose up -d --build
fi

