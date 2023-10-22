import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { ordersSchema } from "../schemas/orders.schema.js"
import { getAllOrders, postOrder } from "../controllers/orders.controller.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(ordersSchema), postOrder)
ordersRouter.get("/orders", getAllOrders);

export default ordersRouter;