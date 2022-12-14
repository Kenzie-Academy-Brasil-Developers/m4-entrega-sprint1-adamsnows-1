import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import users from "../database"

const createSessionServices = async (email, password) => {
    const user = users.find(user => user.email === email)
    const passwordMatch = await compare(password, user.password)
    
    if (!user) {
        throw new Error('Invalid email or password')
    }

    if (!passwordMatch) {
        throw new Error('Invalid email or password')
    }

    const token = jwt.sign({
        name: user.name,
        isAdm: user.isAdm,
        uuid: user.uuid
    },
    "SECRET_KEY",
            {
            expiresIn: "24h",
            subject: user.uuid
        })
    return { "token": token }
}

export default createSessionServices