const fs = require('fs')
const { Readable, Writable, Transform } = require('stream')
const readCustomSteam = require('./src/customSteams')

const pathRead = './input/input.txt'
const pathWrite = './output/output.txt'
const options = {}

const write = fs.createWriteStream(pathWrite, options)
const read = fs.createReadStream(pathRead, options)

const customSteam = readCustomSteam.createCustomSteam(pathRead, options)
const customTransformSteam = readCustomSteam.createCustomTransformSteam({
    cipher: 2,
})

read.pipe(customTransformSteam).pipe(write)
