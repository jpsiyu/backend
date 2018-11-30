#!/usr/bin/env node
const { spawnProcess } = require('./lib/process.js')
const url = 'https://github.com/jpsiyu/node-framework.git'
spawnProcess('git', ['clone', url, '.'])