const fs = require('fs')
const { createShiftsChain } = require('./src/utils')
const customStreams = require('./src/customSteams')

const pathRead = './input/input.txt'
const pathWrite = './output/output.txt'
const options = {}

const write = fs.createWriteStream(pathWrite, options)
const read = fs.createReadStream(pathRead, options)

const test2 = 'A-A-A-R1-R0-R0-R0-C1-C1-A'

const shiftsChain = createShiftsChain(test2)

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
