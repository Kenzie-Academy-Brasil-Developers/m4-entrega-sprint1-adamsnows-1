import users from "../database"

const userProfileServices = (uuid) => {
    const user = users.find(user => user.uuid === uuid)
    if (!user) {
        return {
            message: "User not found"
        }
    }

    const userWithoutPassword = {
        ...user, password: undefined
    }
    console.log(userWithoutPassword)
    return userWithoutPassword
}

export default userProfileServices