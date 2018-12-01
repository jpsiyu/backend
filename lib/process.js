const { spawn, exec } = require('child_process')


const spawnProcess = (command, args, exitCallback) => {
    const child = spawn(command, args, { stdio: 'inherit' })
    child.on('exit', () => {
        console.log('spawned process exit')
        if (exitCallback) exitCallback()
    })
}

const execProcess = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error instanceof (Error)) {
            console.log(error)
            throw error
        }
        if (stdout)
            console.log(stdout)
        if (stderr)
            console.log(stderr)
    })
}

const execProcessList = (commandList) => {
    let commandStr = ''
    const len = commandList.length
    for (let i = 0; i < len; i++) {
        const one = commandList[i]
        if (i < len - 1)
            commandStr = `${commandStr} ${one} && `
        else
            commandStr = `${commandStr} ${one}`
    }
    execProcess(commandStr)
}

module.exports = {
    spawnProcess,
    execProcess,
    execProcessList,
}