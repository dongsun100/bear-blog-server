#!/bin/bash


echo "$(date '+%d/%m/%Y %H:%M:%S') [AfterInstall]을 시작 합니다." >> /home/ubuntu/code-deploy/deploy.log

cd /home/ubuntu/code-deploy/bear-blog-server

npm install -g yarn

yarn install

npx prisma generate
npx prisma db pull

echo "$(date '+%d/%m/%Y %H:%M:%S') [AfterInstall]을 종료 합니다." >> /home/ubuntu/code-deploy/deploy.log