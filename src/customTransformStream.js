const { Transform } = require('stream')
const { shiftPosition } = require('./utils')
const alphabet = require('./alphabet')

class CustomTransformStream extends Transform {
    constructor(props) {
        super(props)
        this.shift = props?.shift
    }

    _transform(chunk, encoding, callback) {
        const symbolsArray = chunk.toString('utf8').split('')

        const outputArray = symbolsArray.map((symbol) => {
            const isUpperCase = symbol === symbol.toUpperCase()
            const prevIndex = alphabet.indexOf(symbol.toLowerCase())

            if (alphabet.includes(symbol.toLowerCase())) {
                const nextIndex = shiftPosition({
                    prevIndex,
                    shift: this.shift,
                    alphabet,
                })

                if (isUpperCase) {
                    return alphabet[nextIndex].toUpperCase()
                }
                return alphabet[nextIndex]
            }
            return symbol
        })
        this.push(outputArray.join(''))
        callback()
    }
}

module.exports = CustomTransformStream
