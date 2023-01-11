import { FastifyRequest, FastifyReply } from "fastify"
import { CreateUserInput, LoginInput  } from "./schemas";
import { createUser, findUserByEmail, findUsers } from "./service";
import { verifyPassword } from '../../utils/hash';
import { server } from "../../server";

export const registerUserHandler = async (
    req: FastifyRequest<{
        Body: CreateUserInput
    }>, 
    res: FastifyReply
    ) => {
        const body = req.body;

        try {
            const user = await createUser(body);

            return res.code(201).send(user);
        } catch (e) {
            console.error(e);
            
            return res.code(500).send(e);
        };
}

export const loginHandler = async ( 
    req: FastifyRequest<{
        Body: LoginInput
    }>, 
    res: FastifyReply
) => {
    const body = req.body;

    const user = await findUserByEmail(body.email);

    if(!user)
        return res.code(401).send({
            message: 'Invalid email or password'
        });

    const correctPassword = verifyPassword({
        candidatePassword: body.password,
        salt: user.salt,
        hash: user.password
    });
    

    if(correctPassword){
        const { password, salt, ...rest } = user;

        return { accessToken: server.jwt.sign(rest) };
    };

    return res.code(401).send({
        message: 'Invalid email or password'
    });
};

export const getUsersHandler = async () => {
    const users = await findUsers();

    return users;
}