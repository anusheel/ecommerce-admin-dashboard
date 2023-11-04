import Image from 'next/image'
import { Inter } from 'next/font/google'
import AdminDashboard from '../components/AdminDashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const orders = [
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
    {
      title: 'Order 3',
      description: 'This is order 3',
      dateOfPurchase: '2023-01-03',
      price: 300,
      status: 'Completed'
    },
    {
      title: 'Order 4',
      description: 'This is order 4',
      dateOfPurchase: '2023-01-04',
      price: 400,
      status: 'Pending'
    },
    {
      title: 'Order 5',
      description: 'This is order 5',
      dateOfPurchase: '2023-01-05',
      price: 500,
      status: 'Completed'
    },
  ]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <AdminDashboard orders={orders} />
    </main>
  )
}