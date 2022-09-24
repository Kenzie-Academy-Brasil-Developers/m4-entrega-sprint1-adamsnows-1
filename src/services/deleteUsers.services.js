import users from "../database"

const deleteUsersServices = (id) => {
    const user = users.findIndex(user => user.id === id)
    if (user === -1) {
        throw new Error("User not found")
    }   
    users.splice(users, 1)
    
    return {
        message: "User deleted"
    }
}

export default deleteUsersServices