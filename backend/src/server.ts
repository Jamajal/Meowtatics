import Fastify, { FastifyRequest, FastifyReply } from 'fastify';
import fjwt from '@fastify/jwt';
import cors from '@fastify/cors';
import userRoutes from './modules/user/route';
import catRoutes from './modules/cat/route';
import { userSchemas } from './modules/user/schemas';
import { catSchemas } from './modules/cat/schemas';

export const server = Fastify();

declare module 'fastify' {
    export interface FastifyInstance {
        auth: any
    }
};

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: {
            id: string,
            email: string,
            name: string
        }
    }
}

server.register(cors, {
    origin: true
});

server.register(fjwt, {
    secret: 'sakdfsdfjasdlfjasdfjsakfçs'
});

server.decorate('auth', async (req: FastifyRequest, res: FastifyReply): Promise<void> => {
    try {
        await req.jwtVerify();
    } catch (e) {
        return res.send(e);
    }
})

const start = async () => {

    for(const schema of [...userSchemas, ...catSchemas]){
        server.addSchema(schema);
    }

    server.register(userRoutes, { prefix: 'api/users' });
    server.register(catRoutes, { prefix: 'api/cats' });
    
    try {
        await server.listen({ port: 3000 });
        console.log(`Server is running at http://localhost:3000`);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start();