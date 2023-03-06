import { v4 as uuidV4 } from "uuid";

class Pet {
  name!: string;
  description!: string;
  id!: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Pet };
