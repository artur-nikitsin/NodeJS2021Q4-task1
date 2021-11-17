const shiftPosition = ({ prevIndex, shift, alphabet }) => {
    const alphabetLength = alphabet.length
    if (shift === 'reverse') {
        const reversedAlphabet = [...alphabet].reverse()
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

module.exports = shiftPosition
