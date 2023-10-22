import { newClient, getClientById, getOrdersByClientId } from "../repositories/clients.repository.js"

export async function postClient(req, res) {
    const { name, address, phone } = req.body;

    try {
        await newClient(name, address, phone);

        res.status(201).send("Cliente adicionado com sucesso :)");

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getClientsOrders(req, res) {
    const { id } = req.params;

    try {
        const clientExists = await getClientById(id);
        if (clientExists.rowCount === 0) return res.status(404).send("Cliente não encontrado :(");

        const orderExists = await getOrdersByClientId(id);
        
        if (orderExists.rows.length === 0) return res.status(404).send("Nenhum pedido encontrado :(");

        const orders = orderExists.rows.map((order) => ({
            orderId: order.orderId,
            quantity: order.quantity,
            createdAt: order.createdAt,
            totalPrice: parseFloat(order.totalPrice),
            cakeName: order.cakeName,
        }));

        res.status(200).send(orders);

    } catch (err) {
        res.status(500).send(err.message);
    }
}