const { parseOption } = require('../utils')
const { createMockStdErr } = require('../testUtils/testUtils')

describe('test parseOption util function', () => {
    it('throw error on options duplicated with message: Duplicate option "-c"', async () => {
        const mockStdErr = createMockStdErr()
        const options = [
            '-c',
            'C1-C0-A',
            '-i',
            'input.txt',
            '-o',
            'output.txt',
            '-c',
            'C1-C0-A',
        ]
        expect(() => {
            parseOption({ options, criteria: '-c' })
        }).toThrow('Duplicate option "-c"')
        expect(mockStdErr).toBeCalledTimes(1)
        mockStdErr.mockRestore()
    })

    it('returned shift must be 2 ', () => {
        const expectedString = 'C1-C0-A'
        const options = ['-c', expectedString]
        expect(parseOption({ options, criteria: '-c' })).toEqual(expectedString)
    })

    it('returned shift must be null ', () => {
        const options = ['-c', 'C1-C0-A']
        expect(parseOption({ options, criteria: '-m' })).toEqual(null)
    })
})
