const fs = require('fs')
const { createShiftsChain, parseOption } = require('./src/utils')
const createStreamsChain = require('./src/utils/createStreamsChain')
const checkOptions = require('./src/checkOptions')

const appArguments = process.argv
const configOption = parseOption({ options: appArguments, criteria: '-c' })
const pathRead = parseOption({ options: appArguments, criteria: '-i' })
const pathWrite = parseOption({ options: appArguments, criteria: '-o' })

checkOptions({ configOption, pathRead, pathWrite })

const options = {}
const read = pathRead ? fs.createReadStream(pathRead, options) : process.stdin
const write = pathWrite
    ? fs.createWriteStream(pathWrite, { flags: 'a' })
    : process.stdout

const shiftsChain = createShiftsChain(configOption)

createStreamsChain({ shifts: shiftsChain, read, write })
