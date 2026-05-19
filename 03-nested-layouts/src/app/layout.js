export const metadata={
  title:"03-nested-layouts",
  description:"Learning Next.js Layout",
};

export default function RootLayout({children}){
  return(
    <html>
      <body>
        <div>
          <h1>Next.js layout</h1>


          <main>

            {children}
          </main>
        </div>
      </body>
    </html>
  )
}