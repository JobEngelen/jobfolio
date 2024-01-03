import type { Metadata } from 'next';
import { nunito } from '@/fonts';
import '../styles/globals.css';
import NavBar from '@/components/Nav/navBar';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Job Engelen',
  description: 'Super hippe portfolio van Job Engelen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
