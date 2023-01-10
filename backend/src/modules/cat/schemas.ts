import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const catInput = {
    name: z.string({
        required_error: 'Name is required',
        invalid_type_error: 'Name must be a string'
    }),
    job: z.string({
        required_error: 'Job is required',
        invalid_type_error: 'Job must be a string'
    }),
    description: z.string({
        required_error: 'Description is required',
        invalid_type_error: 'Description must be a string'
    }).optional(),
    phone: z.string({
        required_error: 'Phone is required',
        invalid_type_error: 'Phone must be a string'
    })
}

const catGenerated = {
    hearts: z.number(),
    cutie: z.number(),
    cool: z.number(),
    createAt: z.string(),
}

const createCatSchema = z.object({
    ...catInput
});

const createCatResponseSchema = z.object({
    id: z.string(),
    ...catInput,
    ...catGenerated
});

const getCatResponseSchema = z.object({
    ...catInput,
    ...catGenerated
});

const getCatSchema = z.object({
    id: z.string()
});

const updateCatSchema = z.object({
    name: z.string().optional(),
    job: z.string().optional(),
    description: z.string().optional(),
    phone: z.string().optional()
});

const updateCatResponseSchema = z.object({
    ...catInput
});

export type CreateCatInput = z.infer<typeof createCatSchema>
export type GetCatInput = z.infer<typeof getCatSchema>
export type UpdateCatInput = z.infer<typeof updateCatSchema>

export const { schemas: catSchemas, $ref } = buildJsonSchemas({
    createCatSchema,
    createCatResponseSchema,
    getCatResponseSchema,
    updateCatSchema,
    updateCatResponseSchema
}, { $id: 'catSchema' });