import users from "../database"

const ensureNewUserMiddleware = (request, response, next) => {
const {name, email, password, isAdm} = request.body

const sameEmail = users.find(user => user.email === email)

if (!name) {
    return response.status(401).json({
        message: `Name is required`
    })
}
if (!email) {
    return response.status(401).json({
        message: `E-mail is required`
    })
}
if (!password) {
    return response.status(401).json({
        message: `Password is required`
    })
}

if (!isAdm) {
    return response.status(401).json({ 
        message: `You have to choose if you gonna be adm, or no, my friend!`
    })
}

if (sameEmail) {
    return response.status(400).json({
        message: `E-mail is already being used`
    })
}

next()
}

export default ensureNewUserMiddleware