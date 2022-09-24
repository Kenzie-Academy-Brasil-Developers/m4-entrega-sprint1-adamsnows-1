import jwt from "jsonwebtoken"

const ensureAuthMiddleware = (request, response, next) => {
    let token = request.headers.authorization


    if (!token) {
        return response.status(401).json({
            message: "Missing authorization token"
        })
    }
    token = token.split(' ')[1]
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if (error) {
            return response.status(401).json({
                message: "Unauthorizdsadsaded"
            })
        }
        request.isAdm = decoded.isAdm
        request.uuid = decoded.sub

        console.log(response)
        next()
    })



}

export default ensureAuthMiddleware