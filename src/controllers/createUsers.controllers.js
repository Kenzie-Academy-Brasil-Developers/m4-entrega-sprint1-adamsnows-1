import createUsersServices from "../services/createUsers.services";

const createUsersController = async (request, response) => {
   const {name, email, password, isAdm, createdOn, updatedOn, uuid }= request.body

   const newUser = await createUsersServices(name, email, password, isAdm, createdOn, updatedOn, uuid)

   return response.status(201).json(newUser)
}

export default createUsersController