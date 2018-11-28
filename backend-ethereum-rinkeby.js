#!/usr/bin/env node
const { execProcess } = require('./lib/process')
const program = require('commander')

const rinkebyPath = '/Users/apple/Library/Ethereum/rinkeby/geth/chaindata/'
const rinkebyIpc = '/Users/apple/Library/Ethereum/rinkeby/geth.ipc'

program
    .option('-p, --path', 'Show Rinkeby database path')
    .option('-i, --ipc-path', 'Show Rinkeby ipc path')
    .option('-s, --size', 'Show Rinkeby database size')
    .command('start', 'Start Rinkeby test net')
    .command('attach', 'Attach Rinkeby test net')
    .parse(process.argv)

if (process.argv.length <= 2) {
    program.help()
    return
}

if (program.path) {
    console.log(rinkebyPath)
}

if (program.ipcPath) {
    console.log(rinkebyIpc)
}

if (program.size) {
    execProcess(`du -sh ${rinkebyPath}`)
}