const { throwError } = require('../utils')
const { createMockExit } = require('../testUtils/testUtils')

describe('test throwError util function', () => {
    it('tests throwError with process.exit and error message', async () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            throwError('Error message')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
})
