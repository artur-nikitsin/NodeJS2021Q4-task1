const CustomTransformStream = require('./customTransformStream')

const customSteams = {
    createCustomTransformStream(props) {
        return new CustomTransformStream(props)
    },
}

module.exports = customSteams
