import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import users from "../database"

const createSessionServices = async (email, password) => {
    const user = users.find(user => user.email === email)
    const passwordMatch = await compare(password, user.password)
    
    if (!email) {
        throw new Error('Invalid email or password')
    }

    if (!passwordMatch) {
        throw new Error('Invalid email or password')
    }

    const token = jwt.sign({
        name: user.name
    },
        "SECRET_KEY",
        {
            expiresIn: "1h",
            subject: user.uuid
        })
    return { "token": token }
}

export default createSessionServices