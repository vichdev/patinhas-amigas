import express from "express";
import { AppDataSource } from "./database/data-source";
import routes from "./routes/pets.routes";

const port = process.env.PORT || 3333;

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(express.json());

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      next();
    });

    app.use("/pets", routes);

    return app.listen(port, () => console.log(`Server is running on ${port}`));
  })
  .catch((e) => console.log("Erro ->", e));
