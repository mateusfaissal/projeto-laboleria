import { getClientId, getCakes, newOrder } from "../repositories/orders.repository.js";

export async function postOrder(req, res) {
    const { clientId, cakeId, quantity, totalPrice } = req.body

    try {
        const cakeExists = await getCakes(cakeId);
        if (cakeExists.rowCount === 0) return res.status(404).send("Esse bolo não existe :(");

        const clientIdExists = await getClientId(clientId);
        if (clientIdExists.rowCount === 0) return res.status(404).send("Cliente não encontrado :(");

        await newOrder(clientId, cakeId, quantity, totalPrice);

        res.status(201).send("Pedido adicionado com sucesso :)");
    } catch (err) {
        res.status(500).send(err.message);
    }
};