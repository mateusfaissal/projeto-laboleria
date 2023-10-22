import { getClientId, getCakes, newOrder, getOrdersFromDate } from "../repositories/orders.repository.js";

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

export async function getAllOrders(req, res) {
    const { date } = req.query

    try {
        const orderExist = await getOrdersFromDate(date);
        if (orderExist.length === 0) return res.status(404).send([]);

        const orders = orderExist.map((order) => {
            return {
              client: {
                id: order.clientId,
                name: order.clientName,
                address: order.clientAddress,
                phone: order.clientPhone,
              },
              cake: {
                id: order.cakeId,
                name: order.cakeName,
                price: parseFloat(order.cakePrice),
                description: order.cakeDescription,
                image: order.cakeImage,
              },
              orderId: order.orderId,
              createdAt: order.createdAt,
              quantity: order.quantity,
              totalPrice: parseFloat(order.totalPrice),
            };
          });
      
          res.status(200).send(orders);

    } catch (err) {
        res.status(500).send(err.message);
    }
}