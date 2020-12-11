const { spawn } = require('child_process')

let child = spawn('node', ['hijo.js'])

child.on('exit', (code, signal) => {
    console.log(code)
})

child.stdout.on('data', (data)=>{
    console.log(['el child me envia data', data].join(': '))
})

child.stderr.on('data', (data)=>{
    console.log(['hubo un error', data].join(': '))
})
