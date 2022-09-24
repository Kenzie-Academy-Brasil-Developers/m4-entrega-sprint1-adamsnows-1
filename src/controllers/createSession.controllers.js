import createSessionServices from "../services/createSession.services"

const createSessionController = async (request, response) => {
    const { email, password } = request.body
    try {
    const user = await createSessionServices(email, password)

    return response.json(user)
    } catch (error) {
        return response.status(401).json({"message": error.message})
    }
    
}

export default createSessionController