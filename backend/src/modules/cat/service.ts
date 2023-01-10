import { Cat } from "@prisma/client";
import prisma from "../../utils/prisma";
import { CreateCatInput, UpdateCatInput } from "./schemas";


export const createCat = (input: CreateCatInput & {userId: string}) => {
    return prisma.cat.create({
        data: {
            ...input
        }
    });
}

export const findAllCats = async () => {
    return await prisma.cat.findMany({
        select: {
            name: true,
            job: true,
            phone: true,
            hearts: true,
            cutie: true,
            cool: true
        }
    });
}

export const findCat = async (catId: string) => {    
    return await prisma.cat.findUnique({
        where: {
            id: catId
        }
    });
};

export const voteHearts = async (cat: Cat | null, catId: string) => {
    if(cat){
        const newHeartsCount = await prisma.cat.update({
            where: {
                id: catId
            },
            data: {
                hearts: (cat.hearts + 1)
            },
            select: {
                hearts: true
            }
        })

        return newHeartsCount
    }

    return null;
}

export const voteCutie = async (cat: Cat | null, catId: string) => {
    if(cat){
        const newCutieCount = await prisma.cat.update({
            where: {
                id: catId
            },
            data: {
                cutie: (cat.cutie + 1)
            },
            select: {
                cutie: true
            }
        })

        return newCutieCount
    }

    return null;
}

export const voteCool = async (cat: Cat | null, catId: string) => {
    if(cat){
        const newCoolCount = await prisma.cat.update({
            where: {
                id: catId
            },
            data: {
                cool: (cat.cool + 1)
            },
            select: {
                cool: true
            }
        })

        return newCoolCount
    }

    return null;
}

export const modifyCat = async (data: UpdateCatInput & {cat: Cat | null}) => {
    
    if(!data.cat){
        return null;
    }

    const newName = data.name ? data.name : data.cat.name;
    const newJob = data.job ? data.job : data.cat.job;
    const newDescription = data.description ? data.description : data.cat.description;
    const newPhone = data.phone ? data.phone : data.cat.phone;

    return await prisma.cat.update({
        where: {
            id: data.cat.id
        },
        data:{
            name: newName,
            job: newJob,
            description: newDescription,
            phone: newPhone
        }
    });
}

export const deleteCat = async (catId: string) => {
    return await prisma.cat.delete({
        where: {
            id: catId
        },

        select: {
            name: true
        }
    });
}