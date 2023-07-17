import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return(
        <div>
            <nav className='w-full top-0 left-0 right-0 z-10'>
                <div className='px-4 justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                    <div>
                        <div className='flex items-center justify-around py-3 md:py-5 md:block'>
                            
                            {/* For Mobile */}
                            <div className='md:hidden'>
                                <button 
                                    className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <Image src="/close.svg" width={30} height={30} alt='logo'/>
                                    ) : (
                                        <Image src="/hamburger-menu.svg"
                                        width={30}
                                        height={30}
                                        alt='logo'
                                        className='focus:border-none active:border-none'/>
                                    )}
                                </button>
                            </div>
                                {/* Logo */}
                            <Link href="/"> 
                                <Image src="/logo.svg" width={154} height={30}/>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? 'p-12 md:p-0 block' : 'hidden'
                            }`}>
                            <ul className='h-screen md:h-auto items-center justify-center md:flex'>
                                <li className='pb-6 text-sm text-black py-2 md:px-5 text-center border-b-2 md:border-b-0'>
                                    <Link href="/" onClick={()=> setNavbar(!navbar)}>Home</Link>
                                </li>
                                <li className='pb-6 text-sm text-black py-2 md:px-6 text-center border-b-2 md:border-b-0'>
                                    <Link href="/" onClick={()=> setNavbar(!navbar)}>How it works</Link>
                                </li>
                                <li className='pb-6 text-sm text-black py-2 md:px-6 text-center border-b-2 md:border-b-0'>
                                    <Link href="/" onClick={()=> setNavbar(!navbar)}>Features</Link>
                                </li>
                                <li className='pb-6 text-sm text-black py-2 md:px-3 text-center border-b-2 md:border-b-0'>
                                    <Link href="/" onClick={()=> setNavbar(!navbar)}>Pricing</Link>
                                </li>
                                <li className='md:pb-4 md:py-2 md:px-0 text-center'>
                                    <Link href="/">
                                        <Image src="/login.svg" width={70} height={30}/>
                                    </Link>
                                </li>
                                <li className='pb-6 text-sm text-black py-2 md:px-0 text-center border-b-2 md:border-b-0'>                            
                                    <Link href="/" onClick={()=> setNavbar(!navbar)}>
                                        Login
                                    </Link>
                                </li>
                                <li className='pb-6 text-sm text-white py-2 md:px-6 text-center border-b-2 md:border-b-0'>
                                    <button id='startClick'>
                                        Get Started Free
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>    
                </div>
            </nav>
        </div>
    );
}

export default NavBar;