#!/usr/bin/env node
const { execProcess } = require('../lib/process')
const program = require('commander')

const rinkebyPath = '/Users/apple/Library/Ethereum/rinkeby/geth/chaindata/'

program
    .option('-p, --path', 'Show Rinkeby database path')
    .option('-s, --size', 'Show Rinkeby database size')
    .parse(process.argv)

if (process.argv.length <= 2) {
    program.help()
    return
}

if (program.path) {
    console.log(rinkebyPath)
}

if (program.size) {
    execProcess(`du -sh ${rinkebyPath}`)
}