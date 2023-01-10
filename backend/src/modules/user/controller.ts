import { FastifyRequest, FastifyReply } from "fastify"
import { CreateUserInput, LoginInput, TokenContent, TokenInput  } from "./schemas";
import { createUser, findUserByEmail, findUsers, verifyUser } from "./service";
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

        return { accessToken: server.jwt.sign(rest), user: user.name };
    };

    return res.code(401).send({
        message: 'Invalid email or password'
    });
};

export const getUsersHandler = async () => {
    const users = await findUsers();

    return users;
};

export const validateTokenHandler = async (
    req: FastifyRequest<{
        Body: TokenInput
    }>,
    res: FastifyReply
) => {
    const token = req.body.accessToken;
    const tokenInfo: TokenContent | null = server.jwt.decode(token);

    if(tokenInfo){
        const checkUser = await verifyUser(tokenInfo.name);

        if(checkUser)
            return res.code(200).send(tokenInfo.name);

        return res.code(500).send({
            message: 'Invalid token'
        });
    }
    
    return res.code(404).send({
        message: 'Token not found'
    });
}