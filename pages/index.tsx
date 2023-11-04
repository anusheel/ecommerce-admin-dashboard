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
      price: 100
    },
    {
      title: 'Order 2',
      description: 'This is order 2',
      dateOfPurchase: '2023-01-02',
      price: 200
    },
    {
      title: 'Order 3',
      description: 'This is order 3',
      dateOfPurchase: '2023-01-03',
      price: 300
    },
    {
      title: 'Order 4',
      description: 'This is order 4',
      dateOfPurchase: '2023-01-04',
      price: 400
    },
    {
      title: 'Order 5',
      description: 'This is order 5',
      dateOfPurchase: '2023-01-05',
      price: 500
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