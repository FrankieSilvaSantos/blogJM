import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GamesBlog',
  description: 'Graphql App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ICONFY */}
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>

    {/* FAVICO */}
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
