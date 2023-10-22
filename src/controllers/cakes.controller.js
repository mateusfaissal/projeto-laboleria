import { getCakeByName, newCake } from "../repositories/cakes.repository.js";

export async function postCake(req, res) {
    const { name, image, price, description } = req.body;

    try {
        const cakeExists = await getCakeByName(name);
        

        if (cakeExists.rowCount === 1) return res.status(409).send("Esse bolo já existe :(");

        await newCake(name, image, price, description);

        res.status(201).send("Bolo adicionado com sucesso :)");

    } catch (err) {
        res.status(500).send(err.message);
    }
}