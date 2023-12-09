#!/bin/bash


echo "$(date '+%d/%m/%Y %H:%M:%S') [ApplicationStart]을 시작 합니다." >> /home/ubuntu/code-deploy/deploy.log

cd /home/ubuntu/code-deploy/bear-blog-server
sudo yarn start:prod

echo "$(date '+%d/%m/%Y %H:%M:%S') [ApplicationStart]을 종료 합니다." >> /home/ubuntu/code-deploy/deploy.log
