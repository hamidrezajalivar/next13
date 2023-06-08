import './globals.css'

import Footer from '../../components/Footer';
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
 <head>

 </head>
      <body className={`bg-red-900 h-screen ${inter.className}`}><Navbar/>{children}   
       <Footer  />
       


    </body>
    </html>
  )
}
