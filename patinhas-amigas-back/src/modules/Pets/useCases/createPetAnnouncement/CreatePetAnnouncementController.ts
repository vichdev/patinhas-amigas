import { Request, Response } from "express";
import { CreatePetAnnouncementUseCase } from "./CreatePetAnnouncementUseCase";

class CreatePetAnnouncementController {
  constructor(private createPetUseCase: CreatePetAnnouncementUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    if (!name) {
      return response.status(500).send();
    }

    this.createPetUseCase.execute({ name, description });
    return response.json("Pet anunciado com sucesso!");
    // return response.status(201).send();
  }
}

export { CreatePetAnnouncementController };
