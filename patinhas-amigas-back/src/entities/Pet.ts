import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pets")
export class Pet {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "text",
  })
  name: string;
}
