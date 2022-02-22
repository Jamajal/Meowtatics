import { getCustomRepository } from "typeorm"
import { CatRepositories } from "../repositories/CatRepositories"

interface ICatRequest {
  id: string,
  link?: string,
  name?: string,
  phone?: string,
  email?: string
}

class UpdateCatService {
  async execute({ id, link, name, phone, email }: ICatRequest) {
    const catRepository = getCustomRepository(CatRepositories);

    const cat = await catRepository.findOne(id);

    if (link)
      cat.link = link;

    if (name)
      cat.name = name;

    if (phone)
      cat.phone = phone;

    if (email)
      cat.email = email;


    //catRepository.save(cat);

    catRepository.update(id, {
      link: cat.link,
      name: cat.name,
      phone: cat.phone,
      email: cat.email
    });

    return cat;
  }
}


export { UpdateCatService }