import { Request, Response } from "express"
import { GetACatService } from "../services/GetACatService";

class GetACatController {

  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const getCatService = new GetACatService();

    const cat = await getCatService.execute({ id });

    return response.json({ cat });
  }
}



export { GetACatController };

