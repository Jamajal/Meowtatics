import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCatInput, GetCatInput, UpdateCatInput } from "./schemas";
import { createCat, deleteCat, findAllCats, findCat, modifyCat, voteCool, voteCutie, voteHearts } from "./service";

export const createCatHandler = async (
    req: FastifyRequest<{
        Body: CreateCatInput
    }>, 
    res: FastifyReply
) => {
    const body = req.body;

    try {
        const cat = await createCat({
            ...body,
            userId: req.user.id
        });
        console.log(cat);
        return res.code(201).send(cat);
    } catch (e) {
        console.error(e);

        return res.code(500).send(e);
    }
}

export const getAllCatsHandler = async () => {
    const cats = await findAllCats();

    return cats;
}

export const getCatHandler = async (
    req: FastifyRequest<{
        Params: GetCatInput
    }>, 
    res: FastifyReply
) => {
    const catId = req.params.id;
    
    try {
        const cat = await findCat(catId);

        if(!cat)
            return res.code(404).send('Invalid id')

        return res.code(200).send(cat);
    } catch (e) {
        console.error(e);

        return res.code(500).send(e)
    }
    
};

export const heartsVoteHandler = async (
    req: FastifyRequest<{
        Params: GetCatInput
    }>, 
    res: FastifyReply
) => {
        const catId = req.params.id;

        const cat = await findCat(catId);
        if(!cat)
            return res.code(404).send('Id invalid')

        try {
            const newHeartCountVote = await voteHearts(cat, catId);
    
            return res.code(200).send(newHeartCountVote);
            
        } catch (e) {
            console.error(e);

            return res.code(500).send("Couldn't update hearts vote");
        };
}

export const cutieVoteHandler = async (
    req: FastifyRequest<{
        Params: GetCatInput
    }>, 
    res: FastifyReply
) => {
        const catId = req.params.id;

        const cat = await findCat(catId);
        if(!cat)
            return res.code(404).send('Id invalid')

        try {
            const newCutieCountVote = await voteCutie(cat, catId);
    
            return res.code(200).send(newCutieCountVote);
            
        } catch (e) {
            console.error(e);

            return res.code(500).send("Couldn't update cutie vote");
        }
}

export const coolVoteHandler = async (
    req: FastifyRequest<{
        Params: GetCatInput
    }>, 
    res: FastifyReply
) => {
        const catId = req.params.id;

        const cat = await findCat(catId);
        if(!cat)
            return res.code(404).send('Id invalid')

        try {
            const newCoolCountVote = await voteCool(cat, catId);
    
            return res.code(200).send(newCoolCountVote);
            
        } catch (e) {
            console.error(e);

            return res.code(500).send("Couldn't update cool vote");
        }
}

export const updateCatHandler = async (
    req: FastifyRequest<{
        Body: UpdateCatInput,
        Params: GetCatInput
    }>,
    res: FastifyReply
) => {
    const catId = req.params.id;

    const cat = await findCat(catId);
    if(!cat)
        return res.code(404).send("Id invalid");

    try {
        const updatedCat = await modifyCat({
            ...req.body,
            cat    
        });

        res.code(200).send(updatedCat);
    } catch (e) {
        console.error(e);

        return res.code(500).send(e);
    }
}

export const deleteCatHandler = async (
    req: FastifyRequest<{
        Params: GetCatInput
    }>, 
    res: FastifyReply
) => {
    const catId = req.params.id;

    try {
        const cat = await findCat(catId);
        if(!cat)
            return res.code(404).send('Id invalid');

        const deletedCatName = await deleteCat(cat.id);

        return res.code(200).send(`${deletedCatName.name} deleted!`);
    } catch (e) {
        console.error(e);
        
        return res.code(500).send(e);
    }

}