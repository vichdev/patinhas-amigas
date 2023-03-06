import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";

const port = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "patinhas_database",
  port: port,
  username: "patinhas_database",
  password: "patinhas_admin",
  name: "patinhas_database",
  entities: [`src/entities/*.{ts,js}`],
  migrations: [`src/database/migrations/*.{ts,js}`],
});
