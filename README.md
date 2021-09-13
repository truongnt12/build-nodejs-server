# build-nodejs-server

## init project

> bash .\express_server_gen.sh

## convert commonJS to esm

- rename extention file .js to .mjs
- add 'type=module' to top package.json
- run node with '--experimental-modules'

## Deploy app to heroku with PM2

> npm install pm2@latest -g
> heroku login
> heroku create
> git push heroku master
