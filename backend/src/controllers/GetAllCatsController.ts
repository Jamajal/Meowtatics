import { Request, Response } from "express"
import { GetAllCatsService } from "../services/GetAllCatsService";

class GetAllCatsController {

  async handle(request: Request, response: Response) {
    const getAllCatsService = new GetAllCatsService();

    const cats = await getAllCatsService.execute();

    return response.json({ cats });
  }
}



export { GetAllCatsController };

