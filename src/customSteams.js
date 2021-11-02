const CustomTransformSteam = require('./customTransformSteam')
const CustomReadSteam = require('./customReadSteam')

const customSteams = {
    createCustomSteam(props) {
        return new CustomReadSteam(props)
    },

    createCustomTransformSteam(props) {
        return new CustomTransformSteam(props)
    },
}

module.exports = customSteams
