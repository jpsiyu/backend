#!/usr/bin/env node
const { spawnProcess, execProcess } = require('./lib/process.js')
const url = 'https://github.com/jpsiyu/node-framework.git'

const rmGitReposity = () => {
    console.log('rm git reposity')
    execProcess('rm -rf .git')
}
spawnProcess('git', ['clone', url, '.'], rmGitReposity)