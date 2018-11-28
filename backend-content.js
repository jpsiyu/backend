#!/usr/bin/env node

/** After link, backend.js is root, so use this one for convenience */

const program = require('commander')

program
    .version('0.0.1')
    .command('ethereum', 'Ethereum tool')
    .command('ubuntu', 'Ubuntu tool')
    .parse(process.argv)

if (process.argv.length <= 2) {
    program.help()
    return
}