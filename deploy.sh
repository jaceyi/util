yarn build

scp -r ./build/* root@util.yijic.com:/util

rm -rf ./build
