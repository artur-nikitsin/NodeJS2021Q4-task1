const { shiftPosition } = require('../utils')
const alphabet = require('../alphabet')

describe('test shiftPosition util function', () => {
    it('returned shift must be 2 ', () => {
        expect(shiftPosition({ prevIndex: 1, shift: 1, alphabet })).toEqual(2)
    })
    it('returned shift must be 0 ', () => {
        expect(shiftPosition({ prevIndex: 25, shift: 1, alphabet })).toEqual(0)
    })
    it('returned shift must be 19 ', () => {
        expect(shiftPosition({ prevIndex: 1, shift: -8, alphabet })).toEqual(19)
    })
    it('returned shift must be 2 ', () => {
        expect(
            shiftPosition({ prevIndex: 0, shift: 'reverse', alphabet })
        ).toEqual(25)
    })
})
