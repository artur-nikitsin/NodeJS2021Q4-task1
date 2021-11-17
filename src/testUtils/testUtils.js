const createMockExit = (message) => {
    return jest.spyOn(process, 'exit').mockImplementation(() => {
        throw new Error(message)
    })
}

module.exports = {
    createMockExit,
}
