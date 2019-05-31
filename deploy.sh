yarn build

scp -r ./build/* root@util.yijic.com:/data/util

rm -rf ./build
