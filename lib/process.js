const { spawn, exec } = require('child_process')


const spawnProcess = (command, args) => {
    const child = spawn(command, args, { stdio: 'inherit' })
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

module.exports = {
    spawnProcess,
    execProcess,
}