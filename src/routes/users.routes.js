import { Router } from "express"
import ensureNewUserMiddleware from "../middlewares/ensureUser.middleware"
import createUsersController from "../controllers/createUsers.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import listUsersControllers from "../controllers/listUsers.controllers"
import isAdminMiddleware from "../middlewares/isAdmin.middleware"
import userProfileControllers from "../controllers/userProfile.controllers"
import updateUsersControllers from "../controllers/updateUsers.controllers"
import ownResourceMiddleware from "../middlewares/ownResource.middleware"
import deleteUsersControllers from "../controllers/deleteUsers.controllers"

const usersRoutes = Router()

//rota de criação de usuário
usersRoutes.post('', ensureNewUserMiddleware, createUsersController)
//rota de listar todos usuários
usersRoutes.get('', ensureAuthMiddleware, isAdminMiddleware, listUsersControllers)
//rota de listar usuário do token criado
usersRoutes.get('/profile', ensureAuthMiddleware, userProfileControllers)
//rota de atualizar os dados de um usuário
usersRoutes.patch('/:uuid', ensureAuthMiddleware, ownResourceMiddleware, updateUsersControllers )
//rota de deletar os usuários do banco
usersRoutes.delete('/:uuid', ensureAuthMiddleware, ownResourceMiddleware, deleteUsersControllers)


export default usersRoutes