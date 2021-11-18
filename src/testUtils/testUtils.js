const createMockExit = () => {
    return jest.spyOn(process, 'exit').mockImplementation((error) => {
        throw new Error(error)
    })
}

const createMockStdErr = () => {
    return jest.spyOn(process, 'stderr', 'get').mockImplementation(() => {
        return {
            write: (error) => {
                throw new Error(error)
            },
        }
    })
}

module.exports = {
    createMockExit,
    createMockStdErr,
}
