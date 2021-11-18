const customStreams = require('../customSteams')
const { createMockExit } = require('../testUtils/testUtils')
const { throwError } = require('../utils')

const shift = 8
const transformStream = customStreams.createCustomTransformStream({
    shift,
})

describe('test transformStream', () => {
    it('tests transformStream', async () => {
        transformStream.on('end', (something) => {
            console.log(something)
        })
    })
})
