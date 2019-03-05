#!/usr/bin/env node

const program = require('commander')
const { spawnProcess, execProcess } = require('./lib/process.js')

program
    .version('0.0.2')

program
    .command('ganache')
    .description('Start private blockchain on port 8545')
    .action((cmd, options) => {
        spawnProcess('ganache-cli', ['--port', '8545', '-i', 999])
    })

program
    .command('server')
    .description('Connect to server')
    .action((cmd, options) => {
        spawnProcess('ssh', ['fisher@192.168.1.5'])
    })

program
    .command('webapp')
    .description('Web app framework')
    .action((cmd, options) => {
        const url = 'https://github.com/jpsiyu/node-framework.git'
        const rmGitReposity = () => {
            console.log('rm git reposity')
            execProcess('rm -rf .git')
        }
        spawnProcess('git', ['clone', url, '.'], rmGitReposity)
    })

program
    .command('docker-cc')
    .description('Clear all containers')
    .action((cmd, options) => {
        const c = 'docker rm -f $(docker ps -aq)'
        execProcess(c)
    })

program
    .command('docker-cnone')
    .description('Clear image with none repository or tag')
    .action((cmd, options) => {
        const c = 'docker image prune'
        execProcess(c)
    })

program.on('command:*', function () {
    console.error('Invalid command: %s\nSee --help for a list of available commands.', program.args.join(' '));
    process.exit(1);
});

program.parse(process.argv)

if (process.argv.length <= 2) {
    program.help()
    return
}