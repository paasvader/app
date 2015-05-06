#!/usr/bin/env bash

yum update -y
yum install -y git
yum install -y docker
yum clean all

curl -L https://github.com/docker/compose/releases/download/1.2.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
