#!/usr/bin/env node
const { spawnProcess } = require('./lib/process.js')
spawnProcess('ssh', ['fisher@192.168.1.5'])