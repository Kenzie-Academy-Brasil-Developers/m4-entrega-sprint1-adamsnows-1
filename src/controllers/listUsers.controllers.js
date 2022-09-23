import listUsersServices from "../services/listUsers.services"

const listUsersControllers = (request, response) => {
    const { isAdm } = request.body
    const users = listUsersServices(isAdm)
    return response.status(200).json(users)
}

export default listUsersControllers