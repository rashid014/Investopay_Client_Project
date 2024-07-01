import Link from 'next/link';
import LogoIcon from '../../../public/assets/Logo1.png'
import Image from 'next/image';
const NavBar = () => {
    return (
        <nav className="bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto">
            <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
                {/* Logo */}
                <div className="text-indigo-500 md:order-1">
                    {/* Heroicon - Chip Outline */}
                    <h1 className="text-4xl font-extrabold text-indigo-600 ">Investopay</h1>
                </div>
                <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
                    <ul className="flex font-semibold justify-between">
                        {/* Active Link = text-indigo-500
                        Inactive Link = hover:text-indigo-500 */}
                        <li className="md:px-4 md:py-2 text-indigo-500">
                            <Link href="#">Dashboard</Link>
                        </li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400">
                            <Link href="#">Search</Link>
                        </li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400">
                            <Link href="#">Explore</Link>
                        </li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400">
                            <Link href="#">About</Link>
                        </li>
                        <li className="md:px-4 md:py-2 hover:text-indigo-400">
                            <Link href="#">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="order-2 md:order-3">
                 
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
