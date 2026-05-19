import Link from 'next/link'

export default function Sidebar(){
    return(
        <div>
            <h2>Dashboard</h2>

            <ul>
                <li>
                    <Link href='/dashboard'>Home</Link>
                </li>

                <li>
                    <Link href='/dashboard/analytics'>Analytics</Link>
                </li>

                <li>
                    <Link href='/dashboard/profile'>Profile</Link>
                </li>

                <li>
          <Link href="/dashboard/settings">
            Settings
          </Link>
        </li>
            </ul>
        </div>
    )
}