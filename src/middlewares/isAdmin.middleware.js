const isAdminMiddleware = (request, response, next) => {
    const isAdm = request.isAdm
    if (!isAdm) {
        return response.status(401).json({
            message: 'Unauthorized'
        })
    }
    next()
}

export default isAdminMiddleware