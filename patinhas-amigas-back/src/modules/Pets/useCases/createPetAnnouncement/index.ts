import { PetsRepository } from "../../repositories/PetsRepository";
import { CreatePetAnnouncementUseCase } from "./CreatePetAnnouncementUseCase";
import { CreatePetAnnouncementController } from "./CreatePetAnnouncementController";

const petsRepository = PetsRepository.getInstance();

const createPetsUseCase = new CreatePetAnnouncementUseCase(petsRepository);

const createPetsController = new CreatePetAnnouncementController(
  createPetsUseCase
);

export { createPetsController };
