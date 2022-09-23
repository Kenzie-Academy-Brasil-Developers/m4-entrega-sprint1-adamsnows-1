import { v4 as uuid } from 'uuid'
import users from "../database"
import { hash } from 'bcryptjs'

const createUsersServices = async (name, email, password, isAdm) => {
    const newUser = {
        name,
        email,
        isAdm,
        createdOn: new Date(),
        updatedOn: new Date(),
        uuid: uuid()
    }

    users.push({...newUser, password: await hash(password, 10)})
    return newUser
}

export default createUsersServices