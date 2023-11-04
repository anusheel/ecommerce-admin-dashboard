import type { NextApiRequest, NextApiResponse } from 'next'

type Order = {
  title: string;
  description: string;
  dateOfPurchase: string;
  price: number;
  status: string;
}

let orders: Order[] = [
  {
    title: 'Order 1',
    description: 'This is order 1',
    dateOfPurchase: '2023-01-01',
    price: 100,
    status: 'Completed'
  },
  {
    title: 'Order 2',
    description: 'This is order 2',
    dateOfPurchase: '2023-01-02',
    price: 200,
    status: 'Pending'
  },
  // ... more orders
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[] | Order | { message: string }>
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(orders);
      break;
    case 'POST':
      const newOrder = req.body as Order;
      orders.push(newOrder);
      res.status(201).json(newOrder);
      break;
    case 'DELETE':
      const { title } = req.query;
      orders = orders.filter(order => order.title !== title);
      res.status(200).json({ message: `Order ${title} deleted.` });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}