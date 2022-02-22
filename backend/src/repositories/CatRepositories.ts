import { EntityRepository, Repository } from "typeorm"
import { Cat } from "../entities/Cat"

@EntityRepository(Cat)
class CatRepositories extends Repository<Cat>{ }

export { CatRepositories }