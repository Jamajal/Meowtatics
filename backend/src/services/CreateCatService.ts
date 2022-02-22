import { getCustomRepository } from "typeorm"
import { CatRepositories } from "../repositories/CatRepositories"

interface ICatRequest {
  link: string;
  name: string;
  phone: string;
  email: string;
}

class CreateCatService {
  async execute({ link, name, phone, email }: ICatRequest) {
    const catRepository = getCustomRepository(CatRepositories);

    const cat = catRepository.create({
      link,
      name,
      phone,
      email
    });

    await catRepository.save(cat);

    return cat;
  }
}


export { CreateCatService }