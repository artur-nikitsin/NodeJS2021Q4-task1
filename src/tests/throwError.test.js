const { throwError } = require('../utils')
const { createMockExit } = require('../testUtils/testUtils')

describe('test throwError util function', () => {
    it('tests throwError with process.exit and error message', async () => {
        const mockExit = createMockExit('1')
        expect(() => {
            throwError('1')
        }).toThrow('1')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
})
