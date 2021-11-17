const throwError = require('./throwError')

const parseOption = ({ options, criteria }) => {
    const duplicates = options.filter((option) => option === criteria)

    if (duplicates.length > 1) {
        throwError(`Duplicate option "${criteria}"`)
    }

    const index = options.indexOf(criteria)
    if (index === -1) {
        return null
    }
    return options[index + 1]
}

module.exports = parseOption
