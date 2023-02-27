import express from "express";
import { AppDataSource } from "./database/data-source";

const port = process.env.PORT || 3333;

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    app.get("/", (req, res) => {
      return res.json("tudo certo");
    });

    return app.listen(port, () => console.log(`Server is running on ${port}`));
  })
  .catch((e) => console.log("Erro ->", e));
