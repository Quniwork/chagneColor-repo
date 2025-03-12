#!/usr/bin/env sh

# 刪除舊的 .output 資料夾
DIR="./.output"
if [ -d "$DIR" ]; then
  yes | rm -r ./.output
fi

# 產出靜態網站
npm run build

# 進到 Nuxt 3 靜態輸出目錄
cd .output/public

# 初始化 git
git init
git checkout -b master
git add -A
git commit -m 'deploy'
git remote add origin git@github-quniwork:quniwork/changeColor.git
git push -f origin master

# 回到上層資料夾
cd -
