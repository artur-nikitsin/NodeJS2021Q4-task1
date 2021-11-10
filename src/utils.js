const shiftPosition = ({ prevIndex, shift, alphabet }) => {
    const alphabetLength = alphabet.length
    if (shift === 'reverse') {
        const reversedAlphabet = alphabet.reverse()
        const symbol = alphabet[prevIndex]
        return reversedAlphabet.indexOf(symbol)
    }
    if (prevIndex + shift >= alphabetLength) {
        return Math.abs(prevIndex + shift - alphabetLength)
    }
    if (prevIndex + shift < 0) {
        return alphabetLength + (prevIndex + shift)
    }
    return Math.abs(prevIndex + shift)
}

const ciphersCodes = ['C', 'R', 'A']
const validationCoding = ['1', '0']
const defaultShifts = {
    C1: 1,
    C0: -1,
    R1: 8,
    R0: -8,
    A: 'reverse',
}

const throwError = (message) => {
    process.stderr.write(message)
    process.exit(1)
}

const createShiftsChain = (templateString) => {
    if (templateString.length > 2 && !templateString.includes('-')) {
        throwError(
            `Incorrect template "${templateString}". Provide config with template`
        )
    }

    const templates = templateString.split('-')
    const shifts = templates.map((template) => {
        if (template === '') {
            throwError(
                `This template: "${templateString}" incorrect. Symbol "-" should bind instruction, but it's empty`
            )
        }
        if (template.length > 2) {
            throwError(
                `This template: "${templateString}" incorrect. Instruction must contain  maximum 2 symbols`
            )
        }
        if (template.length === 1) {
            if (!ciphersCodes.includes(template)) {
                throwError(
                    `Unknown cipher "${template}". Possible options: A, C, R`
                )
            }
            if (template !== 'A') {
                throwError(
                    ` Cipher ${template} must be provided with 1 for decoding or 0 for encoding`
                )
            }
            return defaultShifts[template]
        }

        if (template.length === 2) {
            if (!ciphersCodes.includes(template[0])) {
                throwError(
                    `Unknown cipher "${template}". Possible options: A, C, R`
                )
            }
            if (template[0] === 'A') {
                throwError(
                    `Atbash should not contain a digital parameter. This is incorrect: "${template}"`
                )
            }
            if (!validationCoding.includes(template[1])) {
                throwError(
                    `Cipher ${template} must be provided with 1 for decoding or 0 for encoding. This is incorrect: "${template}"`
                )
            }
            return defaultShifts[template]
        }
    })
    return shifts
}

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

const utilsIndex = {
    shiftPosition,
    createShiftsChain,
    parseOption,
    throwError,
}

module.exports = utilsIndex
