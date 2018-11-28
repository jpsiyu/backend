#!/usr/bin/env node

const program = require('commander')

program
    .version('0.0.1')
    .command('ganache', 'Start private blockchain on port 8545')
    .command('rinkeby', 'Rinkeby testnet interface')
    .parse(process.argv)

if (process.argv.length <= 2) {
    program.help()
    return
}
