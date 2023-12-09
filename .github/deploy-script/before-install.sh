#!/bin/bash

echo "$(date '+%d/%m/%Y %H:%M:%S') [BeforeInstall]을 시작 합니다." >> /home/ubuntu/code-deploy/deploy.log

export HOME="/home/ubuntu/"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion


cd /home/ubuntu/code-deploy/
tar cvf bear-blog-server-backup.tar --exclude bear-blog-server/node_modules bear-blog-server
rm -rf bear-blog-server
mkdir bear-blog-server

echo "$(date '+%d/%m/%Y %H:%M:%S') [BeforeInstall]을 종료 합니다." >> /home/ubuntu/code-deploy/deploy.log