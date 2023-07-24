import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Footer(){
    const [footer, setFooter] = useState(false);
    const [footerSec, setFooterSec] = useState(false);
    const [footerThird, setFooterThird] = useState(false);
    const [footerFourth, setFooterFourth] = useState(false);
    return(
        <div id='footerBg' className='mt-96 lg:mt-72'>
            <div id='callAction' className='col-span-2 w-10/12 h-96 -mb-60 relative bottom-80 lg:bottom-80 mx-auto text-center pt-12'>
                <h1 id='callHeader' className='sm:mx-24 lg:mx-44 xl:mx-60 mb-2 md:mb-7 text-xl sm:text-2xl md:text-3xl lg:text-4xl'><span className='inline-block'>Start analyzing</span> investment properties like a pro.</h1>
                <p id='callParagh' className='sm:mx-24 lg:mx-44 xl:mx-60 mb-0 md:mb-3 text-xs lg:text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                <a
                    id='testBtn'
                    href="#"
                    className="inline-block mt-8 rounded-xl border border-transparent xl:px-8 lg:px-3 md:px-0 px-1 py-3 text-center font-medium text-white"
                    >
                    Get Started Now For Free
                </a>
                <Image id='testBg' src="/test-bg.png" className='hidden lg:flex' width={150} height={10}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-6 px-6 md:px-24 gap-x-8'>
                <div className='col-span-1 md:col-span-2 grid grid-cols-1 gap-6 mb-5 md:mb-0'>
                    <div className="col-span-1">
                        <Link href="/"> 
                           <Image src="/footer-logo.svg" width={154} height={30}/>
                        </Link>
                    </div>
                    <div id='footerFirstParagh' className="col-span-1">
                        <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop.</p>
                    </div>
                    <div className="col-span-1 flex">
                        <Link href="/">
                            <Image src="/footer-social.svg" width={154} height={30}/>
                        </Link>
                    </div>
                </div>
                <div className='col-span-1 grid grid-cols-1 gap-3'>
                    <div className="col-span-1 border-b-2 flex justify-between md:border-b-0">
                        <h1 id="footerHeader">Menu</h1>
                        <button 
                            className='p-2 text-gray-700 rounded-md outline-none md:hidden focus:border-gray-400'
                            onClick={() => setFooter(!footer)}
                        >
                            {footer ? (
                            <Image src="/footer-vector.svg" width={30} height={30}/>
                            ) : (
                            <Image src="/footer-vector.svg"
                            width={30}
                            height={30}
                            className='focus:border-none active:border-none'/>
                            )}
                        </button>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footer ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Features
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footer ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Plans & Pricing
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footer ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Product Updates
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footer ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            How It Works
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footer ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Customers Review
                        </Link>
                    </div>
                </div>
                <div className='col-span-1 grid grid-cols-1 gap-3 mt-5 md:mt-0'>
                    <div className="col-span-1 border-b-2 flex justify-between md:border-b-0">
                        <h1 id="footerHeader">Company</h1>
                        <button 
                            className='p-2 text-gray-700 rounded-md outline-none md:hidden focus:border-gray-400'
                            onClick={() => setFooterSec(!footerSec)}
                        >
                            {footerSec ? (
                            <Image src="/footer-vector.svg" width={30} height={30}/>
                            ) : (
                            <Image src="/footer-vector.svg"
                            width={30}
                            height={30}
                            className='focus:border-none active:border-none'/>
                            )}
                        </button>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerSec ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            About Us
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerSec ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Contact Us
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerSec ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Press Kit
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerSec ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Privacy Policy
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerSec ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Help
                        </Link>
                    </div>
                </div>
                <div className='col-span-1 grid grid-cols-1 gap-3 mt-5 md:mt-0'>
                    <div className="col-span-1 border-b-2 flex justify-between md:border-b-0">
                        <h1 id="footerHeader">Use Cases</h1>
                        <button 
                            className='p-2 text-gray-700 rounded-md outline-none md:hidden focus:border-gray-400'
                            onClick={() => setFooterThird(!footerThird)}
                        >
                            {footerThird ? (
                            <Image src="/footer-vector.svg" width={30} height={30}/>
                            ) : (
                            <Image src="/footer-vector.svg"
                            width={30}
                            height={30}
                            className='focus:border-none active:border-none'/>
                            )}
                        </button>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerThird ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Rental Property Analysis
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerThird ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            BRRRR Analysis
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerThird ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Fix & Flip Analysis
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerThird ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Property Wholesaling
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerThird ? 'block':'hidden'
                        }`}>
                        <Link href="/" className="footerLinks">
                            Commercial Analysis
                        </Link>
                    </div>
                </div>
                <div className='col-span-1 grid grid-cols-1 gap-3 mt-5 md:mt-0'>
                    <div className="col-span-1 border-b-2 flex justify-between md:border-b-0">
                        <h1 id="footerHeader">Resources</h1>
                        <button 
                            className='p-2 text-gray-700 rounded-md outline-none md:hidden focus:border-gray-400'
                            onClick={() => setFooterFourth(!footerFourth)}
                        >
                            {footerFourth ? (
                            <Image src="/footer-vector.svg" width={30} height={30}/>
                            ) : (
                            <Image src="/footer-vector.svg"
                            width={30}
                            height={30}
                            className='focus:border-none active:border-none'/>
                            )}
                        </button>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerFourth ? 'block':'hidden'
                        }`}>
                        <Link href="/" onClick={() => setFooter(!footer)} className="footerLinks">
                            Help Center
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerFourth ? 'block':'hidden'
                        }`}>
                        <Link href="/" onClick={() => setFooter(!footer)} className="footerLinks">
                            Affiliate Program
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerFourth ? 'block':'hidden'
                        }`}>
                        <Link href="/" onClick={() => setFooter(!footer)} className="footerLinks">
                            Deal Analyzer Blog
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerFourth ? 'block':'hidden'
                        }`}>
                        <Link href="/" onClick={() => setFooter(!footer)} className="footerLinks">
                            Free Resources
                        </Link>
                    </div>
                    <div className={`col-span-1 md:block ${
                        footerFourth ? 'block':'hidden'
                        }`}>
                        <Link href="/" onClick={() => setFooter(!footer)} className="footerLinks">
                            Terms of Use
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-6 text-center mt-8 mb-5">
                    <span id='footerLastWrite'>@ 2023 REI Deal Analyzer. All Rights Reserved</span>
                    <Link href="/"><Image className="up" src="/up.svg" width={30} height={10}/></Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;