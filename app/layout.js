import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BlogJM',
  description: 'Graphql App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/logo/logo.ico" sizes="any" />
      </head>
      <body>
        <header><Header></Header></header>
       <main>{children}</main>
       <footer><Footer></Footer></footer>
        </body>
    </html>
  )
}
