import React, { useState, useEffect } from 'react';

interface Order {
  title: string;
  description: string;
  dateOfPurchase: string;
  price: number;
  status: string;
}

const AdminDashboard: React.FC = () => {
  const [orderList, setOrderList] = useState<Order[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newOrder, setNewOrder] = useState<Order>({
    title: '',
    description: '',
    dateOfPurchase: '',
    price: 0,
    status: '',
  });

  useEffect(() => {
    fetch('/api/orders')
      .then(response => response.json())
      .then(data => setOrderList(data));
  }, []);

  const handleAddOrder = () => {
    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder),
    })
      .then(response => response.json())
      .then(data => setOrderList([...orderList, data]));

    setNewOrder({
      title: '',
      description: '',
      dateOfPurchase: '',
      price: 0,
      status: '',
    });
    setIsAdding(false);
  };

  const handleDeleteOrder = (title: string) => {
    fetch(`/api/orders?title=${title}`, {
      method: 'DELETE',
    })
      .then(() => setOrderList(orderList.filter(order => order.title !== title)));
  };

  return (
    <div className="flex flex-col w-full max-w-screen-lg text-sm">
      <h1 className="text-xl font-bold mb-4">Admin Dashboard</h1>
      <button
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsAdding(true)}
      >
        +
      </button>
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Purchase</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orderList.map((order, index) => (
              <tr key={index} className={`hover:bg-gray-100 ${index % 2 === 0 ? 'bg-blue-50' : ''}`}>
                <td className="px-6 py-4 whitespace-nowrap">{order.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.dateOfPurchase}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteOrder(order.title)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            <tr className={`hover:bg-gray-100 ${isAdding ? '' : 'hidden'}`}>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={newOrder.title}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, title: e.target.value })
                  }
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={newOrder.description}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, description: e.target.value })
                  }
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="date"
                  value={newOrder.dateOfPurchase}
                  onChange={(e) =>
                    setNewOrder({
                      ...newOrder,
                      dateOfPurchase: e.target.value,
                    })
                  }
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="number"
                  value={newOrder.price}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, price: Number(e.target.value) })
                  }
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={newOrder.status}
                  onChange={(e) =>
                    setNewOrder({ ...newOrder, status: e.target.value })
                  }
                />
              </td>
              <td>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleAddOrder}
                >
                  Add
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;