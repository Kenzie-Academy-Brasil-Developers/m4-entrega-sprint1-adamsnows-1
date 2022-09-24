const onResourceMiddleware = (request, response, next) => {
    const { uuid } = request.params
    
    if (request.uuid !== uuid && request.isAdm === false) {
        return response.status(401).json({
            message: 'Unauthorized'
        })
    }
    next()
}

export default onResourceMiddleware