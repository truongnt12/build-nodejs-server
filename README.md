# build-nodejs-server

## init project

> bash .\express_server_gen.sh

## convert commonJS to esm

- rename extention file .js to .mjs
- add 'type=module' to top package.json
- run node with '--experimental-modules'