const { Transform } = require('stream')
const alphabet = require('./alphabet')

class CustomTransformSteam extends Transform {
    constructor(props) {
        super(props)
        this.cipher = props?.cipher
    }

    _transform(chunk, encoding, callback) {
        const symbolsArray = chunk.toString('utf8').split('')

        const outputArray = symbolsArray.map((symbol) => {
            const isUpperCase = symbol === symbol.toUpperCase()
            const prevIndex = alphabet.indexOf(symbol.toLowerCase())
            if (alphabet.includes(symbol.toLowerCase())) {
                if (isUpperCase) {
                    return alphabet[prevIndex + this.cipher].toUpperCase()
                }
                return alphabet[prevIndex + this.cipher]
            }
            return symbol
        })
        this.push(outputArray.join(''))
        callback()
    }
}

module.exports = CustomTransformSteam
