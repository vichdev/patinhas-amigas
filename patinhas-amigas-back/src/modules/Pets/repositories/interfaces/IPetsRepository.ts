import { Pet } from "../../model/Pet";

interface IPetsRepository {
  findPetByName(name: string): Pet | undefined;
  list(): Pet[];
  create({ name, description }: ICreatePetDTO): void;
  delete(id: string): void;
  checkId(id: string): Pet | undefined;
}

interface ICreatePetDTO {
  name: string;
  description: string;
}

interface IUpdatePetDTO {
  name: string;
  description: string;
}

export { IPetsRepository, ICreatePetDTO, IUpdatePetDTO };
