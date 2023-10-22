import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { clientsSchema } from "../schemas/clients.schema.js"
import { postClient } from "../controllers/clients.controller.js";

const clientsRouter = Router();

clientsRouter.post("/clients", validateSchema(clientsSchema), postClient);

export default clientsRouter;