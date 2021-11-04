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
const options = {}

console.log('@@@', configOption)

const write = fs.createWriteStream(pathWrite, options)
const read = fs.createReadStream(pathRead, options)

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
