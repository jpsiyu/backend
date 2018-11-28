#!/usr/bin/env node
const { spawnProcess } = require('./lib/process')
spawnProcess('geth', ['attach', '/Users/apple/Library/Ethereum/rinkeby/geth.ipc'])