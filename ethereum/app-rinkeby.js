#!/usr/bin/env node
const { spawnProcess } = require('../lib/process')
spawnProcess('geth', ['--rinkeby', '--rpc', '--rpcapi', 'eth, web3, net, personal'])