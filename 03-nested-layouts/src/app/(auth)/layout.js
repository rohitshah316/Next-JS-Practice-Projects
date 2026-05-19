export default function AuthLayout({children}){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-40 rounded">
                {children}
            </div>
        </div>
    )
}