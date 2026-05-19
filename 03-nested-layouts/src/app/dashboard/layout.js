import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function DashboardLayout({children}){
    return(
        <div className='flex'>
            <Sidebar/>

            <div className='flex-1 p-20'>
                <Navbar/>
                {children}
            </div>
        </div>
    )
}