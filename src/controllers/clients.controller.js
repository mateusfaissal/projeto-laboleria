import { newClient } from "../repositories/clients.repository.js"

export async function postClient(req, res) {
    const { name, address, phone } = req.body;

    try {
        await newClient(name, address, phone);

        res.status(201).send("Cliente adicionado com sucesso :)");

    } catch (err) {
        res.status(500).send(err.message);
    }
}