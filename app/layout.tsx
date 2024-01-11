import type { Metadata } from 'next';
import { nunito } from '@/fonts';
import '../styles/globals.css';
import NavBar from '@/components/Nav/navBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'JOBFOL.IO',
  description: 'Explore the digital world of Job Engelen - a passionate developer with a flair for creating innovative solutions. Browse through a showcase of projects and expertise in web development.',
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
