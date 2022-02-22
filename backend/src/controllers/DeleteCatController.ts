import { Request, Response } from "express"
import { DeleteCatService } from "../services/DeleteCatService";

class DeleteCatController {

  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const deleteCatService = new DeleteCatService();

    const repositoryChange = await deleteCatService.execute({ id });

    return repositoryChange == 1
      ? response.send("Bye bye cat!")
      : response.send("The is no cat like that!")
  }
}



export { DeleteCatController };

