import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Steps(){
    return(
        <div className='relative overflow-hidden'>
            <div>
                <h1 id='stepHeader' className='text-center'>Accurate property analysis in just a few clicks:</h1>
            </div>
            <div id='stepOne'>
                <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="col-span-1 md:col-span-2">
                            <div><p id='line' className='inline-block'></p><span id='lineWrite' className='relative left-3 top-1'>STEP 1</span></div>
                            <h1 className="font-bold tracking-tight mt-3">
                                <span id='stepFirstWrite'>Import dozens of property data points.</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-500">
                                Quickly search for properties and import their description, list price, value & rent estimates, property taxes, photos and more. Or use our step-by-step wizard to enter the data manually.
                            </p>
                            <p className="mt-4 text-base text-gray-500">
                            Quickly search for properties and import their description, list price, value & rent estimates, property taxes, photos and more.
                            </p>
                            <div>
                                <a
                                    id='multiBtn'
                                    href="#"
                                    className="inline-block mt-5 rounded-xl border border-transparent px-9 py-3 text-center font-medium text-white"
                                    >
                                    Contact Us Now
                                </a>
                            </div>
                        </div>
                        <div id='stepOnePicture' className='col-span-1 md:col-span-3 relative w-96 h-96 left-1 sm:left-24 md:left-9 lg:left-40 xl:left-64 md:top-10 lg:top-10 xl:top-0 bg-no-repeat bg-contain mt-10 sm:mt-7 lg:mt-0'>
                            <div id='stepFirstCollap' className='bg-white w-7/12 h-60 relative right-5 top-8 lg:right-32'>
                                <h1 id='firstCollapWrite' className='font-bold tracking-tight pl-3 pt-4 mb-5'>Property Data</h1>
                                <div id='firstCollapInf' className='mb-1 relative left-4'><Image src="/step-one-collap.png" width={50} height={10} className='rounded-lg float-left'/><p className='relative text-base left-3'>406 Burdsal Pkwy Indianapolis, In 46208</p></div>
                                <p className='pt-2 pl-3 mb-1'><Image src="/collap-third.svg" width={30} height={10} className='inline pr-2'/><span className='ml-2'>Multi Family Apartnemnt</span></p>
                                <p className='pt-2 pl-3 mb-1'><Image src="/collap-fourth.svg" width={30} height={10} className='inline pr-2'/><span className='ml-2'>Include 4 units</span></p>
                                <p className='pt-2 pl-3'><Image src="/collap-first.svg" width={30} height={10} className='inline pr-2'/><span className='ml-2'>Living Area 568 Sq.Ft</span></p>
                                <div className='flex relative left-16 bottom-2'>
                                    <Image src="/ellipse.svg" width={90} height={10}/>
                                    <Image src='/thunder.svg' width={25} height={10} className='relative right-14 bottom-3'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='stepTwo'>
            <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-7xl px-4 sm:px-6 md:px-8">
                        <div id='stepTwoPicture' className='col-span-1 md:col-span-3 relative w-96 h-96 left-1 sm:left-24 md:left-4 lg:left-0 md:top-10 lg:top-10 xl:top-0 bg-no-repeat bg-contain mt-10 sm:mt-7 lg:mt-0'>
                            <div id='firstCollap' className='bg-white w-7/12 h-64 relative right-5 top-8 lg:left-72'>
                                <h1 id='firstCollapWrite' className='font-bold tracking-tight pl-3 pt-4'>Property Analysis</h1>
                                <div className='mt-3 flex'>
                                    <Image src="/pink.svg" width={100} height={10} className='inline relative left-11'/>
                                    <Image src="/purple.svg" width={100} height={10} className='relative right-14'/>
                                    <span id='circleWrite' className='relative right-32 top-2'>18%</span><span id='circleWrite' className='relative right-40 top-7 mr-3'>11%</span>
                                    <Image src="/orange.svg" width={100} height={10} className='relative right-52'/><span id='circleWrite' className='relative right-72 top-12'>22%</span>
                                    <Image src="/blue.svg" width={100} height={10} className='relative right-80 mr-4'/><span id='circleWrite' className='relative right-96 top-12'>67%</span>
                                   
                                </div>
                                <p className='pt-2 pl-3'><Image src="/collap-first.svg" width={25} height={10} className='inline pr-2'/>Living area 2800 sqft</p>
                                <p className='pt-2 pl-3'><Image src="/collap-sec.svg" width={25} height={10} className='inline pr-2'/>Cap rate 19% </p>
                                <div className='flex relative left-16 bottom-0'>
                                    <Image src="/ellipse.svg" width={90} height={10}/>
                                    <Image src='/thunder.svg' width={25} height={10} className='relative right-14 bottom-3'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-2">
                            <div><p id='line' className='inline-block'></p><span id='lineWrite' className='relative left-3 top-1'>STEP 2</span></div>
                            <h1 className="font-bold mt-3 tracking-tight">
                                <span id='stepSecWrite'>View detailed financial analysis and projections.</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-500">
                                Quickly search for properties and import their description, list price, value & rent estimates, property taxes, photos and more. Or use our step-by-step wizard to enter the data manually.
                            </p>
                            <p className="mt-4 text-base text-gray-500">
                            Quickly search for properties and import their description, list price, value & rent estimates, property taxes, photos and more.
                            </p>
                            <div>
                                <a
                                    id='multiBtn'
                                    href="#"
                                    className="inline-block mt-5 rounded-xl border border-transparent px-9 py-3 text-center font-medium text-white"
                                    >
                                    Contact Us Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='stepThree'>
            <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="col-span-1 md:col-span-2">
                            <div><p id='line' className='inline-block'></p><span id='lineWrite' className='relative left-3 top-1'>STEP 3</span></div>
                            <h1 className="font-bold mt-3 tracking-tight">
                                <span id='stepThirdWrite'>Calculate your max allowable offers to sellers.</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-500">
                                Quickly search for properties and import their description, list price, value & rent estimates, property taxes, photos and more. Or use our step-by-step wizard to enter the data manually.
                            </p>
                            <p className="mt-4 text-base text-gray-500">
                            Quickly search for properties and import their description, list price, value & rent estimates, property taxes, photos and more.
                            </p>
                            <div>
                                <a
                                    id='multiBtn'
                                    href="#"
                                    className="inline-block mt-5 rounded-xl border border-transparent px-9 py-3 text-center font-medium text-white"
                                    >
                                    Contact Us Now
                                </a>
                            </div>
                        </div>
                        <div id='stepThreePicture' className='col-span-1 md:col-span-3 relative w-96 h-96 left-1 sm:left-24 md:left-9 lg:left-40 xl:left-64 md:top-10 lg:top-10 xl:top-0 bg-no-repeat bg-contain mt-10 sm:mt-7 lg:mt-0'>
                            <div id='firstCollap' className='bg-white w-7/12 h-64 relative right-5 top-8 lg:right-28'>
                                <h1 id='firstCollapWrite' className='font-bold tracking-tight pl-3 pt-4 mb-5'>Offers</h1>
                                <div id='firstCollapInf' className='mb-1 relative left-4'><Image src="/step-one-collap.png" width={50} height={10} className='rounded-lg float-left'/><p className='relative text-base left-3'>406 Burdsal Pkwy Indianapolis, In 46208</p></div>
                                <div id='stepThreeWrite' className='pt-2 pl-3 flex justify-around'><span className=''>Current Price</span><div className='inline'><span className='font-semibold'>$165,000</span><Image src="/first-arrow.svg" width={10} height={10} className='inline ml-1 pb-1'/></div></div>
                                <div id='stepThreeWrite' className='pt-2 pl-3 flex justify-around'><span className=''>Highest Offer</span><div className='inline'><span className='font-semibold'>$195,000</span><Image src="/sec-arrow.svg" width={10} height={10} className='inline ml-1 pb-1'/></div></div>
                                <div id='stepThreeWrite' className='pt-2 pl-3 flex justify-around'><span className=''>Cash On return</span><div className='inline'><span className='font-semibold'>$90,000</span><Image src="/sec-arrow.svg" width={10} height={10} className='inline ml-1 pb-1'/></div></div>
                                <div id='stepThreeWrite' className='pt-2 pl-3 flex justify-around'><span className=''>Income Increased</span><div className='inline'><span className='font-semibold'>2% Per Yr</span><Image src="/sec-arrow.svg" width={10} height={10} className='inline ml-1 pb-1'/></div></div>
                                <div className='flex relative left-16 bottom-2'>
                                    <Image src="/ellipse.svg" width={90} height={10}/>
                                    <Image src='/thunder.svg' width={25} height={10} className='relative right-14 bottom-3'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Steps;