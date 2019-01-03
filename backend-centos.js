#!/usr/bin/env node
const { spawnProcess } = require('./lib/process.js')
spawnProcess('ssh', ['root@192.168.1.7'])