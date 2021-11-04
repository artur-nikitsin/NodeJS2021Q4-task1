const fs = require('fs')
const { createShiftsChain } = require('./src/utils')
const customStreams = require('./src/customSteams')

const pathRead = './input/input.txt'
const pathWrite = './output/output.txt'
const options = {}

const write = fs.createWriteStream(pathWrite, options)
const read = fs.createReadStream(pathRead, options)

const test2 = 'R1-'

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
