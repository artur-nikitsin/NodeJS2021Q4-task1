const fs = require('fs')
const throwError = require('./utils/throwError')

const checkOptions = ({ configOption, pathRead, pathWrite }) => {
    if (!configOption) {
        throwError('Config option "-c" not provided')
    }

    if (pathRead) {
        if (!fs.existsSync(pathRead)) {
            throwError(`File with path ${pathRead} not found`)
        }
    }
    if (pathWrite) {
        if (!fs.existsSync(pathWrite)) {
            throwError(`File with path ${pathWrite} not found`)
        }
    }
}

module.exports = checkOptions
