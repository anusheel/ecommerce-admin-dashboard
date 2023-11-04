import React, { useState } from 'react';

interface Order {
  title: string;
  description: string;
  dateOfPurchase: string;
  price: number;
}

interface AdminDashboardProps {
  orders: Order[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ orders }) => {
  const [orderList, setOrderList] = useState(orders);
  const [isAdding, setIsAdding] = useState(false);
  const [newOrder, setNewOrder] = useState<Order>({
    title: '',
    description: '',
    dateOfPurchase: '',
    price: 0,
  });

  const handleAddOrder = () => {
    setOrderList([...orderList, newOrder]);
    setNewOrder({
      title: '',
      description: '',
      dateOfPurchase: '',
      price: 0,
    });
    setIsAdding(false);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orderList.map((order, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{order.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.dateOfPurchase}</td>
                <td className="px-6 py-4 whitespace-nowrap">{order.price}</td>
              </tr>
            ))}
            {isAdding && (
              <tr className="hover:bg-gray-100">
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
                <td>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleAddOrder}
                  >
                    Add
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;