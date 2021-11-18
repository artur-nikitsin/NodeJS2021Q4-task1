const customStreams = require('../customSteams')

const createStreamsChain = ({ shifts, read, write }) => {
    let currentStream = read
    shifts.forEach((shift) => {
        const nextSteam = customStreams.createCustomTransformStream({
            shift,
        })
        currentStream = currentStream.pipe(nextSteam)
    })
    return currentStream.pipe(write)
}

module.exports = createStreamsChain
