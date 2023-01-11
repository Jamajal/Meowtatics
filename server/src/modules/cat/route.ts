import { FastifyInstance } from "fastify";
import { coolVoteHandler, createCatHandler, cutieVoteHandler, deleteCatHandler, getAllCatsHandler, getCatHandler, heartsVoteHandler, updateCatHandler } from "./controller";
import { $ref } from "./schemas";

export const catRoutes = async (server: FastifyInstance) => {
    server.post(
        '/',
        {
            schema: {
                body: $ref('createCatSchema'),
                response: {
                    201: $ref('createCatResponseSchema')
                }
            },
            preHandler: [server.auth]
        },
        createCatHandler);

        server.get('/',
        {},
        getAllCatsHandler)

        server.get('/:id',
        {
            schema:{
                response: {
                    200: $ref('getCatResponseSchema')
                }
            }
        },
        getCatHandler)

        server.put('/:id/heart-vote', 
        {
            preHandler: [server.auth],
        }, 
        heartsVoteHandler);

        server.put('/:id/cutie-vote', 
        {
            preHandler: [server.auth],
        }, 
        cutieVoteHandler);

        server.put('/:id/cool-vote', 
        {
            preHandler: [server.auth],
        }, 
        coolVoteHandler);

        server.put('/:id/update',
        {
            preHandler: [server.auth],
            schema:{
                body: $ref('updateCatSchema'),
                response: {
                    200: $ref('updateCatResponseSchema')
                }
            }
        },
        updateCatHandler);

        server.delete('/:id/delete',
        {
            preHandler: [server.auth]
        },
        deleteCatHandler);
};

export default catRoutes;