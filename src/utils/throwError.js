const throwError = (message) => {
    process.stderr.write(message)
    process.exit(1)
}

module.exports = throwError
