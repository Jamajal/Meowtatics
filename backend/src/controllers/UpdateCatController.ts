import { Request, Response } from "express"
import { UpdateCatService } from "../services/UpdateCatService";

class UpdateCatController {

  async handle(request: Request, response: Response) {
    const { link, name, phone, email } = request.body;
    const id = request.params.id;

    const updateCatService = new UpdateCatService();

    const cat = await updateCatService.execute({ id, link, name, phone, email });

    return response.send("Cat rebornnnn!")
  }
}

export { UpdateCatController };

