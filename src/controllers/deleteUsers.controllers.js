import deleteUsersServices from "../services/deleteUsers.services"


const deleteUsersControllers = (request, response) => {
    const { uuid, isAdm } = request.body

    try {
        const message = deleteUsersServices(uuid)
        return response.status(200).json(message)
    } catch (error) {
        return response.status(400).json(error.message)
    }    
}

export default deleteUsersControllers