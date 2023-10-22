import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js"
import { cakesSchema } from "../schemas/cakes.schema.js"
import { postCake } from "../controllers/cakes.controller.js";


const cakesRouter = Router();

cakesRouter.post("/cakes", validateSchema(cakesSchema), postCake)

export default cakesRouter;