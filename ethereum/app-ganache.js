#!/usr/bin/env node
const { spawnProcess } = require('../lib/process.js')
spawnProcess('ganache-cli', ['--port', '8545'])