const { parseOption } = require('../utils')
const { createMockExit } = require('../testUtils/testUtils')

describe('test parseOption util function', () => {
    it('throw error on options duplicated', async () => {
        const mockExit = createMockExit('1')
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
        }).toThrow('1')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
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
