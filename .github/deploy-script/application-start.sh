#!/bin/bash

export HOME="/home/ubuntu/"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


echo "$(date '+%d/%m/%Y %H:%M:%S') [ApplicationStart]을 시작 합니다." >> /home/ubuntu/code-deploy/deploy.log

cd /home/ubuntu/code-deploy/bear-blog-server
yarn start:prod

echo "$(date '+%d/%m/%Y %H:%M:%S') [ApplicationStart]을 종료 합니다." >> /home/ubuntu/code-deploy/deploy.log
