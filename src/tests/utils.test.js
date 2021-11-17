const {
    throwError,
    shiftPosition,
    createShiftsChain,
    parseOption,
} = require('../utils')
const alphabet = require('../alphabet')

describe('test shiftPosition util function', () => {
    it('returned shift must be 2 ', () => {
        expect(shiftPosition({ prevIndex: 1, shift: 1, alphabet })).toEqual(2)
    })
    it('returned shift must be 0 ', () => {
        expect(shiftPosition({ prevIndex: 25, shift: 1, alphabet })).toEqual(0)
    })
    it('returned shift must be 2 ', () => {
        expect(
            shiftPosition({ prevIndex: 0, shift: 'reverse', alphabet })
        ).toEqual(25)
    })
})

describe('test throwError util function', () => {
    it('tests throwError with process.exit and error message', async () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            throwError('Error message')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
})
