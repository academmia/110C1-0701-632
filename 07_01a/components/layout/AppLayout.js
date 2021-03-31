
import Link from 'next/link'

export default function AppLayout({ children }) {
    return (
        <div>

            <div className="main-nav nav-bg-hover bordered-bottom container-fluid">
                <div className="main-menu menu-borderd">
                    <h2 style={{ display: 'inline-block' }}>mKommerce</h2>

                    <label htmlFor="toggle-1" className="toggle-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon-color-1-fill icon-s" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>


                    </label>
                    <input type="checkbox" />

                    <nav>
                        <ul>

                            <li> <Link href="/about">
                                <a> About </a> 
                            </Link> </li>
                            <li> <Link href="/products">
                                <a> Products </a> 
                            </Link> </li>
                            <li> <Link href="/categories">
                                <a> Categories </a> 
                            </Link> </li>
                            <li> <Link href="/products/latest">
                                <a> Latest Products </a> 
                            </Link> </li>
                            <li> <Link href="/products/promo">
                                <a> Promo Products </a> 
                            </Link> </li>

                        </ul>
                    </nav>
                </div>

            </div>
            <div className="container center">
                {children}
            </div>

        </div>
    )
}