import { getCustomRepository } from "typeorm"
import { CatRepositories } from "../repositories/CatRepositories"

interface ICatRequest {
  id: string
}

class GetACatService {
  async execute({ id }: ICatRequest) {
    const catRepository = getCustomRepository(CatRepositories);

    const cat = await catRepository.findOne(id);

    console.log(cat)

    return cat;
  }
}


export { GetACatService }