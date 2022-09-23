import { Router } from "express"
import createSessionController from "../controllers/createSession.controllers"

const loginRoutes = Router()

//rota de login recebendo email e password 
//no corpo da requisição como json
loginRoutes.post('', createSessionController)


export default loginRoutes