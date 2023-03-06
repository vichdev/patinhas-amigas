import { Pet } from "../model/Pet";
import {
  IPetsRepository,
  ICreatePetDTO,
  IUpdatePetDTO,
} from "./interfaces/IPetsRepository";

class PetsRepository implements IPetsRepository {
  private pets: Pet[];
  private static INSTANCE: PetsRepository;

  private constructor() {
    this.pets = [];
  }

  public static getInstance(): PetsRepository {
    if (!PetsRepository.INSTANCE) {
      PetsRepository.INSTANCE = new PetsRepository();
    }
    return PetsRepository.INSTANCE;
  }

  create({ description, name }: ICreatePetDTO): void {
    const pet = new Pet();

    Object.assign(pet, {
      name,
      description,
    });

    this.pets.push(pet);
  }

  delete(id: string): void {
    const deleted = this.pets.find((pet) => pet.id === id);
    if (deleted) {
      this.pets = this.pets.filter((pet) => pet.id !== id);
    }
  }

  list(): Pet[] {
    return this.pets;
  }

  findPetByName(name: string): Pet | undefined {
    const pet = this.pets.find((pet) => pet.name === name);
    return pet;
  }

  updatePet(id: string, { name, description }: IUpdatePetDTO): void {
    const newPet = {
      id,
      name,
      description,
    };

    const petIndex = this.pets.findIndex((pet) => pet.id === id);

    this.pets[petIndex] = newPet;
  }

  checkId(id: string): Pet | undefined {
    const petId = this.pets.find((pet) => pet.id === id);
    return petId;
  }
}

export { PetsRepository };
