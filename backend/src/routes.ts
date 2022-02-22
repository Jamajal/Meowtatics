import { Router } from "express";

import { CreateCatController } from "./controllers/CreateCatController";
import { DeleteCatController } from "./controllers/DeleteCatController";
import { UpdateCatController } from "./controllers/UpdateCatController";
import { GetACatController } from "./controllers/GetACatController";
import { GetAllCatsController } from "./controllers/GetAllCatsController";

const router = Router();

const createCatController = new CreateCatController();
const deleteCatController = new DeleteCatController();
const updateCatController = new UpdateCatController();
const getACatController = new GetACatController();
const getAllCatsController = new GetAllCatsController();

router.post("/cats-house/new-kitten", createCatController.handle);
router.delete("/cats-house/memorial/:id", deleteCatController.handle);
router.put("/cats-house/dress-room/:id", updateCatController.handle);
router.get("/cats-house/:id", getACatController.handle);
router.get("/cats-house", getAllCatsController.handle);

export { router }