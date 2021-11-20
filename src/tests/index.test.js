const { spawn } = require('child_process')

describe('Test general app scenarios', () => {
    const dataToString = (data) => data.toString()
    it('Error when "-c" config option provided twice', (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C1-C1-A-R0',
            '-c',
            'C0',
        ])
        workerProcess.stderr.on('data', function (data) {
            expect(dataToString(data)).toEqual('Duplicate option "-c"')
            done()
        })
    })

    it('Error when "-c" not provided', (done) => {
        const workerProcess = spawn('node', ['ciphering-cli-tool.js'])
        workerProcess.stderr.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'Config option "-c" not provided'
            )
            done()
        })
    })

    it("Error when user passed -i argument with path that doesn't exist or with no read access", (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C1-C1-A-R0',
            '-i',
            'incorrectInputFilePath.txt',
        ])
        workerProcess.stderr.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'File with path incorrectInputFilePath.txt not found'
            )
            done()
        })
    })

    it("Error when user passed -o argument with path that doesn't exist or with no read access", (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C1-C1-A-R0',
            '-o',
            'incorrectOutputFilePath.txt',
        ])
        workerProcess.stderr.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'File with path incorrectOutputFilePath.txt not found'
            )
            done()
        })
    })

    it('Error when user incorrect symbols in argument for config', (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C2-C1-A-R0',
        ])
        workerProcess.stderr.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'Cipher C2 must be provided with 1 for decoding or 0 for encoding. This is incorrect: "C2-C1-A-R0"'
            )
            done()
        })
    })

    // success scenarios:

    it(
        'Test passed when user passes correct sequence ' +
            'of symbols as argument for -c that matches regular expression',
        (done) => {
            const workerProcess = spawn('node', [
                'ciphering-cli-tool.js',
                '-c',
                'C1-C1-R0-A',
                '-i',
                './src/tests/fixtures/testInput.txt',
            ])
            workerProcess.stdout.on('data', function (data) {
                expect(dataToString(data)).toEqual(
                    'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!\n'
                )
                done()
            })
        }
    )

    it('Test passes when user passed "C1-C1-R0-A" config and output transformed text is correct', (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C1-C1-R0-A',
            '-i',
            './src/tests/fixtures/testInput.txt',
        ])
        workerProcess.stdout.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'Myxn xn nbdobm. Tbnnfzb ferlm "_" nhteru!\n'
            )
            done()
        })
    })

    it('Test passes when user passed "C1-C0-A-R1-R0-A-R0-R0-C1-A" config and output transformed text is correct', (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C1-C0-A-R1-R0-A-R0-R0-C1-A',
            '-i',
            './src/tests/fixtures/testInput.txt',
        ])
        workerProcess.stdout.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'Vhgw gw wkmxkv. Ckwwoik onauv "_" wqcnad!\n'
            )
            done()
        })
    })

    it('Test passes when user passed "A-A-A-R1-R0-R0-R0-C1-C1-A" config and output transformed text is correct', (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'A-A-A-R1-R0-R0-R0-C1-C1-A',
            '-i',
            './src/tests/fixtures/testInput.txt',
        ])
        workerProcess.stdout.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'Hvwg wg gsqfsh. Asggous opcih "_" gmapcz!\n'
            )
            done()
        })
    })

    it('Test passes when user passed "C1-R1-C0-C0-A-R0-R1-R1-A-C1" config and output transformed text is correct', (done) => {
        const workerProcess = spawn('node', [
            'ciphering-cli-tool.js',
            '-c',
            'C1-R1-C0-C0-A-R0-R1-R1-A-C1',
            '-i',
            './src/tests/fixtures/testInput.txt',
        ])
        workerProcess.stdout.on('data', function (data) {
            expect(dataToString(data)).toEqual(
                'This is secret. Message about "_" symbol!\n'
            )
            done()
        })
    })
})
