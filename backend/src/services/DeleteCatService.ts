import { getCustomRepository } from "typeorm"
import { CatRepositories } from "../repositories/CatRepositories"

interface ICatRequest {
  id: string
}

class DeleteCatService {
  async execute({ id }: ICatRequest) {
    const catRepository = getCustomRepository(CatRepositories);

    const repositoryChange = (await catRepository.delete(id)).affected;

    return repositoryChange;
  }
}


export { DeleteCatService }