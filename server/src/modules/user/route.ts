import { FastifyInstance } from "fastify";
import { getUsersHandler, loginHandler, registerUserHandler } from "./controller";
import { $ref } from "./schemas";

const userRoutes = async (server: FastifyInstance) => {
    server.post(
        '/', 
        {
            schema: {
                body: $ref('createUserSchema'),
                response: {
                    201: $ref('createUserResponseSchema')
                }
            }
        },
        registerUserHandler);

    server.post(
        '/login', 
        {
            schema: {
                body: $ref('loginSchema'),
                response: {
                    200: $ref('loginResponseSchema')
                }
            }
        }, 
        loginHandler);

    server.get(
        '/', 
        {
            preHandler: [server.auth]
        },
        getUsersHandler);
}

export default userRoutes;