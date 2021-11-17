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
    it('returned shift must be 19 ', () => {
        expect(shiftPosition({ prevIndex: 1, shift: -8, alphabet })).toEqual(19)
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
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('C2-C0')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })

    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('C10')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('C1-')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('C10-R1')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('M1-R1')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('A1-R1')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })

    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('M-E')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })

    it('throw error on invalid config', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
        expect(() => {
            createShiftsChain('R-R')
        }).toThrow('Error message')
        expect(mockExit).toHaveBeenCalledWith(1)
        mockExit.mockRestore()
    })
})

describe('test parseOption util function', () => {
    it('throw error on options duplicated', async () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {
            throw new Error('Error message')
        })
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
        }).toThrow('Error message')
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
