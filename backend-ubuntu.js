#!/usr/bin/env node

const program = require('commander')

program
    .version('0.0.1')
    .command('connect', 'SSH connect to Ubuntu server')
    .parse(process.argv)

if (process.argv.length <= 2) {
    program.help()
    return
}
