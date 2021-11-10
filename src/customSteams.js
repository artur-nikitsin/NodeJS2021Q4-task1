const CustomTransformStream = require('./customTransformSteam')

const customSteams = {
    createCustomTransformStream(props) {
        return new CustomTransformStream(props)
    },
}

module.exports = customSteams
