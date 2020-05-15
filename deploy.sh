yarn build

scp -r ./dist/* root@util.jaceyi.com:/projects/util

rm -rf ./dist
