import express from "express";
import "reflect-metadata";
import { appRoutes } from "./routes";
import "express-async-errors";
import handleError from "./middlewares/handleError";

const app = express();
app.use(express.json());
appRoutes(app);

app.use(handleError);
// app.listen(process.env.PORT || 3000)

export default app;
