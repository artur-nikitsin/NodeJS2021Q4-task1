const { createShiftsChain } = require('../utils')
const { createMockStdErr } = require('../testUtils/testUtils')

describe('test createShiftsChain util function', () => {
    it('returned shift must be 2 ', () => {
        const expectedResult = [
            1,
            -1,
            'reverse',
            8,
            -8,
            'reverse',
            -8,
            -8,
            1,
            'reverse',
        ]
        expect(createShiftsChain('C1-C0-A-R1-R0-A-R0-R0-C1-A')).toMatchObject(
            expectedResult
        )
    })

    it(
        'throw error on invalid config with message:' +
            'Cipher C2 must be provided with 1 for decoding or 0 for encoding. This is incorrect: "C2-C0"',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('C2-C0')
            }).toThrow(
                'Cipher C2 must be provided with 1 for decoding or 0 for encoding. This is incorrect: "C2-C0"'
            )
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'Incorrect template "C10". Provide config with template',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('C10')
            }).toThrow('Incorrect template "C10". Provide config with template')
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'This template: "C1-" incorrect. Symbol "-" should bind instruction, but it\'s empty',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('C1-')
            }).toThrow(
                'This template: "C1-" incorrect. Symbol "-" should bind instruction, but it\'s empty'
            )
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'This template: "C10-R1" incorrect. Instruction must contain  maximum 2 symbol',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('C10-R1')
            }).toThrow(
                'This template: "C10-R1" incorrect. Instruction must contain  maximum 2 symbol'
            )
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'Unknown cipher "M1". Possible options: A, C, R',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('M1-R1')
            }).toThrow('Unknown cipher "M1". Possible options: A, C, R')
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'Atbash should not contain a digital parameter. This is incorrect: "A1"',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('A1-R1')
            }).toThrow(
                'Atbash should not contain a digital parameter. This is incorrect: "A1"'
            )
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'Unknown cipher "M". Possible options: A, C, R',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('M-E')
            }).toThrow('Unknown cipher "M". Possible options: A, C, R')
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )

    it(
        'throw error on invalid config' +
            'Cipher R must be provided with 1 for decoding or 0 for encoding',
        () => {
            const mockStdErr = createMockStdErr()
            expect(() => {
                createShiftsChain('R-R')
            }).toThrow(
                'Cipher R must be provided with 1 for decoding or 0 for encoding'
            )
            expect(mockStdErr).toBeCalledTimes(1)
            mockStdErr.mockRestore()
        }
    )
})
