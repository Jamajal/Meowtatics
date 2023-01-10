import { z } from "zod";
import {buildJsonSchemas} from 'fastify-zod';

const userCore = {
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string'
    }).email(),
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string'
    })
}

const createUserSchema = z.object({
    ...userCore,
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    })
});

const createUserResponseSchema = z.object({
    id: z.string(),
    ...userCore
});

const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is required',
        invalid_type_error: 'Email must be a string'
    }).email(),
    password: z.string({
        required_error: 'Password is required',
        invalid_type_error: 'Password must be a string'
    })
});

const loginResponseSchema = z.object({
    accessToken: z.string(),
    user: z.string()
});

const validateTokenSchema = z.object({
    accessToken: z.string()
})

const tokenContent = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    iat: z.number()
})

const validateTokenSchemaResponse = z.object({
    user: z.string()
})

export type CreateUserInput = z.infer<typeof createUserSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type TokenInput = z.infer<typeof validateTokenSchema>
export type TokenContent = z.infer<typeof tokenContent>

export const { schemas: userSchemas, 
    $ref } = buildJsonSchemas({
    createUserSchema,
    createUserResponseSchema,
    loginSchema,
    loginResponseSchema,
    validateTokenSchema,
    validateTokenSchemaResponse
}, { $id: 'userSchema' });