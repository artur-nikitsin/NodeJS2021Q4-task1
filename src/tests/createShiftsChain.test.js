const { createShiftsChain } = require('../utils')
const { createMockExit } = require('../testUtils/testUtils')

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

    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('C2-C0')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })

    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('C10')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('C1-')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('C10-R1')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('M1-R1')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('A1-R1')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })

    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('M-E')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })

    it('throw error on invalid config', () => {
        const mockExit = createMockExit('Error message')
        expect(() => {
            createShiftsChain('R-R')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
})
