


export const metadata={
  title:"02-dynamic-routes",
  description: 'dynamic routes',
};


const RootLayout=({children})=>{
  return(
    <html>
      <body>
        <h3>Hello</h3>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}


export default RootLayout;