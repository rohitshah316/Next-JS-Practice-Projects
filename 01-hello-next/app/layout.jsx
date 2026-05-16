import './globals.css'
import Link from 'next/link'

export const metadata={
  title:"01-hello-text",
  description: 'my first next.js project',
};


export default function RootLayout({children}){
  return(
    <html>
      <body className='flex flex-col min-h-screen'>
        <nav className='flex gap-3 bg-green-300 p-10'>
          <Link href="/">Home</Link> | {" "}
          <Link href="/about">about</Link> | {" "}
          <Link href="/contact">contact</Link>|  {" "}
          <Link href="/services">services</Link>


        
          
        </nav>


        <main className='flex-1'>
          {children}
        </main>


        <footer className=' text-center bg-gray-300 p-10'>
          This is footer
        </footer>
      </body>
    </html>
  )
}