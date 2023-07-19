import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Banner(){
    return(
        <div className="relative overflow-hidden">
            <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-3 max-w-7xl px-4 sm:px-6 md:px-8">
                    <div className="col-span-1">
                        <div><p id='line' className='inline-block'></p><span id='bannerThirdWrite' className='pl-4'>REI Deal Analyzer</span></div>
                        <h1 className="font-bold tracking-tight">
                            <span id='bannerFirstWrite'>Maximize your real estate ROI with the precision of <span id='bannerSecWrite' className='inline-block'>REI Deal Analyzer.</span></span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <div>
                            <a
                                id='bannerBtn'
                                href="#"
                                className="inline-block mt-8 rounded-xl border border-transparent xl:px-8 lg:px-3 md:px-0 px-1 py-3 text-center font-medium text-white"
                                >
                                Try Deal Analyzer Now
                            </a>
                            <Image src="/vector.svg" width={120} height={30} className='inline pl-10 pt-5 md:pt-10 md:w-1/3'/>
                        </div>
                    </div>
                    <div id='bannerPicture' className='col-span-1 md:col-span-2 relative left-5 md:left-9 lg:left-12 xl:left-64 md:top-10 lg:top-0 bg-no-repeat bg-contain mt-10 sm:mt-7 lg:mt-0'>
                        <div id='firstCollap' className='bg-white w-44 h-56 relative right-3 bottom-5 lg:right-12'>
                            <div id='bannerFirstPicture' className='w-full h-1/2 text-center'></div>
                            <h1 id='firstCollapWrite' className='font-bold tracking-tight pl-3 pt-4'>4 bed Appartmnet</h1>
                            <p className='pt-2 pl-3'><Image src="/collap-first.svg" width={25} height={10} className='inline pr-2'/>Living area 2800 sqft</p>
                            <p className='pt-2 pl-3'><Image src="/collap-sec.svg" width={25} height={10} className='inline pr-2'/>Cap rate 19% </p>
                        </div>
                        <div id='secCollap' className='relative right-3 top-16 lg:right-12 md:top-40'>
                            <p>Valuation</p>
                            <h1>$8944900</h1>
                            <Image src="/graph.svg" width={80} height={30}/>
                        </div>
                        <div id='thirdCollap' className='relative top-16 lg:right-4 md:top-40'>
                            <p>Earned This Year</p>
                            <h1>$682.5</h1>
                            <Image src="/bar.svg" width={110} height={30}/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Banner;