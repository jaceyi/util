yarn build

scp -r ./dist/* root@util.jaceyi.com:/data/util

rm -rf ./dist
