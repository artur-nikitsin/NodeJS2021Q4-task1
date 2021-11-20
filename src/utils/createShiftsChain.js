const throwError = require('./throwError')
const {
    ciphersCodes,
    validationCoding,
    defaultShifts,
} = require('../configurationConstants')

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
                    `Cipher ${template} must be provided with 1 for decoding or 0 for encoding. This is incorrect: "${templateString}"`
                )
            }
            return defaultShifts[template]
        }
    })
    return shifts
}

module.exports = createShiftsChain
