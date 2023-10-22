import Joi from "joi";

export const cakesSchema = Joi.object({
    name: Joi.string().min(2).trim().required(),
    price: Joi.number().precision(2).min(0.01).required(),
    image: Joi.string().uri().required(),
    description: Joi.string(),
})