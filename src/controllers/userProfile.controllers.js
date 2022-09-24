import users from "../database"
import userProfileServices from "../services/userProfile.services"

const userProfileControllers = (request, response) => {
    const uuid = request.uuid
    const user = userProfileServices(uuid)

    if (typeof user === 'string') {
        return response.status(403).json({
            message: user
        })
    }
    return response.status(200).json(user)
}

export default userProfileControllers