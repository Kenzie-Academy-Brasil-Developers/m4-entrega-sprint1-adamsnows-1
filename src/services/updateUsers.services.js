import users from "../database"

const updateUsersServices = async (name, email, uuid) => {
    const userIndex = users.findIndex(user => user.uuid === uuid)
    if (userIndex === -1) {
        throw new Error('User not found')
    }
    const updatedUser = {
        name,
        email,
        updatedOn: new Date()
    }

    users[userIndex] = { ...users[userIndex], ...updatedUser }

    return {...users[userIndex], password: undefined}
}

export default updateUsersServices