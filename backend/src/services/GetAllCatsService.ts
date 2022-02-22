import { getCustomRepository } from "typeorm"
import { CatRepositories } from "../repositories/CatRepositories"

class GetAllCatsService {
  async execute() {
    const catRepository = getCustomRepository(CatRepositories);

    const cats = await catRepository.find();

    return cats.reverse();
  }
}


export { GetAllCatsService }