import { IPetsRepository } from "../../repositories/interfaces/IPetsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreatePetAnnouncementUseCase {
  constructor(private petsRepository: IPetsRepository) {}
  execute({ name, description }: IRequest): void {
    const petAlreadyExists = this.petsRepository.findPetByName(name);

    if (petAlreadyExists) {
      throw new Error("Task already exists!");
    }

    this.petsRepository.create({ name, description });
  }
}

export { CreatePetAnnouncementUseCase };
