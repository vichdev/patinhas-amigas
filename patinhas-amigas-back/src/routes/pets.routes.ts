import { Request, Response, Router } from "express";
import { createPetsController } from "../modules/Pets/useCases/createPetAnnouncement";

const routes = Router();

routes.post("/", (req: Request, res: Response): Response => {
  return createPetsController.handle(req, res);
});

export default routes;
