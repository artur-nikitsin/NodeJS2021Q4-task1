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
                console.log('prevIndex', prevIndex)
                const nextIndex = shiftPosition({
                    prevIndex,
                    shift: this.shift,
                    alphabet,
                })
                console.log('nextIndex', nextIndex)
                console.log('alphabet[nextIndex]', alphabet[nextIndex])
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
