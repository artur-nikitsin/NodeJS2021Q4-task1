const { createMockStdErr } = require('../testUtils/testUtils')
const checkOptionsExistence = require('../checkOptions')

describe('test checkOptionsExistence function', () => {
    it(
        'throw error if -c option not provided with message:' +
            'Config option "-c" not provided',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                checkOptionsExistence({ configOption: null })
            }).toThrow('Config option "-c" not provided')
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error if -i option provide incorrect path to file:' +
            'File with path incorrectInputPath not found',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                checkOptionsExistence({
                    configOption: 'C1-C0',
                    pathRead: 'incorrectInputPath',
                    pathWrite: 'output.txt',
                })
            }).toThrow('File with path incorrectInputPath not found')
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error if -o option provide incorrect path to file:' +
            'File with path incorrectOutputPath not found',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                checkOptionsExistence({
                    configOption: 'C1-C0',
                    pathRead: 'input.txt',
                    pathWrite: 'incorrectOutputPath',
                })
            }).toThrow('File with path incorrectOutputPath not found')
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )
})
