yarn build

scp -r ./dist/* root@util.yijic.com:/data/util

rm -rf ./dist
