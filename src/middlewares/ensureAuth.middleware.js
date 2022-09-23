const ensureAuthMiddleware = (request, response, next) => {
    let token = request.headers.authorization

    if (!token) {
        return response.status(401).json({
            message: "Missing authorization token"
        })
    }
    next()
}

export default ensureAuthMiddleware