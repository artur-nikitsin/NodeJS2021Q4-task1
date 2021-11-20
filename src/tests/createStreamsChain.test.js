const fs = require('fs')
const createStreamsChain = require('../utils/createStreamsChain')
const createShiftsChain = require('../utils/createShiftsChain')

describe('test createStreamsChain function', () => {
    const createRead = () =>
        fs.createReadStream('./src/tests/fixtures/testInput.txt', {})
    const createWrite = () =>
        fs.createWriteStream('./src/tests/fixtures/testOutput.txt', {})

    it('success transformation with config C1-C1-R0-A', (done) => {
        const shifts = createShiftsChain('C1-C1-R0-A')
        const read = createRead()
        const write = createWrite()

        write.on('finish', () => {
            const readResult = fs.readFileSync(
                './src/tests/fixtures/testOutput.txt',
                'utf8'
            )
            expect(readResult).toEqual(
                'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!\n'
            )
            done()
        })
        createStreamsChain({ shifts, write, read })
    })

    it('success transformation with config C1-C0-A-R1-R0-A-R0-R0-C1-A', (done) => {
        const shifts = createShiftsChain('C1-C0-A-R1-R0-A-R0-R0-C1-A')
        const read = createRead()
        const write = createWrite()
        write.on('finish', () => {
            const readResult = fs.readFileSync(
                './src/tests/fixtures/testOutput.txt',
                'utf-8'
            )
            expect(readResult).toEqual(
                'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!\n'
            )
            done()
        })
        createStreamsChain({ shifts, write, read })
    })

    it('success transformation with config A-A-A-R1-R0-R0-R0-C1-C1-A', (done) => {
        const shifts = createShiftsChain('A-A-A-R1-R0-R0-R0-C1-C1-A')
        const read = createRead()
        const write = createWrite()
        write.on('finish', () => {
            const readResult = fs.readFileSync(
                './src/tests/fixtures/testOutput.txt',
                'utf-8'
            )
            expect(readResult).toEqual(
                'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!\n'
            )
            done()
        })
        createStreamsChain({ shifts, write, read })
    })

    it('success transformation with config C1-R1-C0-C0-A-R0-R1-R1-A-C1', (done) => {
        const shifts = createShiftsChain('C1-R1-C0-C0-A-R0-R1-R1-A-C1')
        const read = createRead()
        const write = createWrite()
        write.on('finish', () => {
            const readResult = fs.readFileSync(
                './src/tests/fixtures/testOutput.txt',
                'utf-8'
            )
            expect(readResult).toEqual(
                'This is secret. Message about "_" symbol!\n'
            )
            done()
        })
        createStreamsChain({ shifts, write, read })
    })
})
