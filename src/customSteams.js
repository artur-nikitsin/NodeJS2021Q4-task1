const CustomTransformStream = require('./customTransformSteam')
const CustomReadSteam = require('./customReadSteam')

const customSteams = {
    createCustomSteam(props) {
        return new CustomReadSteam(props)
    },

    createCustomTransformStream(props) {
        return new CustomTransformStream(props)
    },
}

module.exports = customSteams
