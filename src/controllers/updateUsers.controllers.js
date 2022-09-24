import updateUserService from "../services/updateUsers.services"

const updateUsersControllers = async (request, response) => {
    try {
        const { uuid } = request.params
        const { name, email } = request.body

        const updatedUser = await updateUserService(name, email, uuid)

        return response.status(200).json(updatedUser)
    } catch (error) {
        return response.status(400).json(error.message)
    }
}

export default updateUsersControllers