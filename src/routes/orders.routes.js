import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { ordersSchema } from "../schemas/orders.schema.js"
import { getAllOrders, getAllOrdersById, postOrder } from "../controllers/orders.controller.js";

const ordersRouter = Router();

ordersRouter.post("/order", validateSchema(ordersSchema), postOrder)
ordersRouter.get("/orders", getAllOrders);
ordersRouter.get("/orders/:id", getAllOrdersById);

export default ordersRouter;