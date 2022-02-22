import { Request, Response } from "express"
import { CreateCatService } from "../services/CreateCatService";

class CreateCatController {

  async handle(request: Request, response: Response) {
    const { link, name, phone, email } = request.body;

    const createCatService = new CreateCatService();

    await createCatService.execute({ link, name, phone, email });

    return response.send("Your cat has been created!");
  }
}



export { CreateCatController };

