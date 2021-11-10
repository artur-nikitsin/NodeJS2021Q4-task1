const fs = require('fs')
const { createShiftsChain, parseOption, throwError } = require('./src/utils')
const customStreams = require('./src/customSteams')

const appArguments = process.argv
const configOption = parseOption({ options: appArguments, criteria: '-c' })
if (!configOption) {
    throwError('Config option "-c" not provided')
}

const pathRead = parseOption({ options: appArguments, criteria: '-i' })
const pathWrite = parseOption({ options: appArguments, criteria: '-o' })

if (pathRead) {
    if (!fs.existsSync(pathRead)) {
        throwError('read not found')
    }
}
if (pathWrite) {
    if (!fs.existsSync(pathWrite)) {
        throwError('write not found')
    }
}

const options = {}
const write = pathWrite
    ? fs.createWriteStream(pathWrite, options)
    : fs.createWriteStream('output.txt', options)
const read = pathRead ? fs.createReadStream(pathRead, options) : process.stdin

const shiftsChain = createShiftsChain(configOption)

const createStreamsChain = (shifts) => {
    let currentStream = read
    shifts.forEach((shift) => {
        const nextSteam = customStreams.createCustomTransformStream({
            shift,
        })
        currentStream = currentStream.pipe(nextSteam)
    })
    return currentStream.pipe(write)
}

createStreamsChain(shiftsChain)
