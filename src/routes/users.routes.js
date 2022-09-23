import { Router } from "express"
import ensureNewUserMiddleware from "../middlewares/ensureUser.middleware"
import createUsersController from "../controllers/createUsers.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import listUsersControllers from "../controllers/listUsers.controllers"

const usersRoutes = Router()

//rota de criação de usuário
usersRoutes.post('', ensureNewUserMiddleware, createUsersController)
//rota de listar todos usuários
usersRoutes.get('', ensureAuthMiddleware, listUsersControllers)
//rota de listar usuário do token criado
usersRoutes.get('/profile', )
//rota de atualizar os dados de um usuário
usersRoutes.patch('/:uuid', )
//rota de deletar os usuários do banco
usersRoutes.delete('/:uuid', )


export default usersRoutes