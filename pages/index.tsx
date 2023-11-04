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
    // Add more orders as needed
  ]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <AdminDashboard orders={orders} />
    </main>
  )
}