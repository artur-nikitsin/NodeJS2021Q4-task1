const fs = require('fs')
const customStreams = require('../customSteams')
const { createMockExit } = require('../testUtils/testUtils')
const { throwError } = require('../utils')

const shift = 8
const transformStream = customStreams.createCustomTransformStream({
    shift,
})
const read = fs.createReadStream('./src/tests/fixtures/testInput.txt', {})
const write = fs.createWriteStream('./src/tests/fixtures/testOutput.txt', {})

describe('test transformStream', () => {
    it('tests transformStream', async () => {
        transformStream.on('transform', (something) => {
            console.log(something)
        })
        read.pipe(transformStream).pipe(write)
    })
})
