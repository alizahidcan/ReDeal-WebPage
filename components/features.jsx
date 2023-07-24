import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Features(){
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr===0 ? 4 -1 : curr-1))
    const next = () => setCurr((curr) => (curr===  3 ?0 : curr+1))
    return(
        <div className='relative overflow-hidden'>
            <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="col-span-1 md:col-span-2 sm:mt-10">
                            <h1 className="font-bold tracking-tight">
                                <span id='stepFirstWrite'>Explore REI Deal Analyzer Main Features</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-500">
                            It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                            </p>
                            <div>
                                <a
                                    id='bannerBtn'
                                    href="#"
                                    className="inline-block mt-8 rounded-xl border border-transparent xl:px-8 lg:px-3 md:px-0 px-1 py-3 text-center font-medium text-white"
                                    >
                                    Try Deal Analyzer Now
                                </a>
                            </div>
                        </div>
                        <div className='col-span-1 hidden md:col-span-3 sm:grid grid-cols-1 sm:grid-cols-4 ml-1 md:ml-5 sm:mt-16 md:mt-0'>
                            <div id='featuresFirst' className=' col-span-1 xl:w-72 xl:h-48 sm:col-span-2 mr-5 relative bottom-6'>
                                <div id='featuresFirstPicture' className=' w-16 h-16 inline-block ml-5 mt-5 mr-1'></div>
                                <Image src="/features-first.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                <h1 id='featuresHeader' className='ml-5'>In-depth Analysis</h1>
                                <p id='featuresParagh' className='ml-5'>Our advanced software analyzes market data, property details, and financial metrics to provide you...</p>
                            </div>
                            <div id='featuresSec' className=' col-span-1 xl:w-72 xl:h-48 sm:col-span-2'>
                                <div id='featuresSecPicture' className='w-16 h-16 inline-block mr-1 ml-5 mt-5'></div>
                                <Image src="/features-sec.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                <h1 id='featuresHeader' className='ml-5'>Quick Analysis</h1>
                                <p id='featuresParagh' className='ml-5'>Our Quick Chips tool is a powerful addition to your real estate inves- tment arsenal, providing a fast and...</p>
                            </div>
                            <div id='featuresThird' className=' col-span-1 xl:w-72 xl:h-48 sm:col-span-2 mr-5'>
                                <div id='featuresThirdPicture' className='w-16 h-16 inline-block mr-1 ml-5 mt-5'></div>
                                <Image src="/features-third.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                <h1 id='featuresHeader' className='ml-5'>Property Types</h1>
                                <p id='featuresParagh' className='ml-5'>REI Deal Analyzer is a versatile tool that can analyze a wide range of property types including single...</p>
                            </div>
                            <div id='featuresFourth' className=' col-span-1 xl:w-72 xl:h-48 sm:col-span-2 relative top-6'>
                                <div id='featuresFourthPicture'className='w-16 h-16 inline-block mr-1 ml-5 mt-5'></div>
                                <Image src="/features-fourth.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                <h1 id='featuresHeader' className='ml-5'>Prospectus Generator</h1>
                                <p id='featuresParagh' className='ml-5'>Introducing the REI Prospectus Generator, the newest addition to our real estate investment toolkit....</p>
                            </div>
                        </div>
                        {/* For Mobile */}
                        <div id='container' className="sm:hidden mx-auto px-4">
                            <div id='carousel' className='relative overflow-hidden'>
                                <div id='slider' className='mt-14 transition-transform ease-out duration-500 flex' 
                                style={{transform:`translateX(-${curr*25}%)`}}>
                                    <div id='featuresFirst' className='slides'>
                                        <div id='featuresFirstPicture' className=' w-16 h-16 inline-block ml-5 mt-5 mr-1'></div>
                                        <Image src="/features-first.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                        <h1 id='featuresHeader' className='ml-5 mb-3'>In-depth Analysis</h1>
                                        <p id='featuresParagh' className='ml-5 mb-3'>Our advanced software analyzes market data, property details, and financial metrics to provide you...</p>
                                    </div>
                                    <div id='featuresSec' className='slides'>
                                        <div id='featuresSecPicture' className='w-16 h-16 inline-block mr-1 ml-5 mt-5'></div>
                                        <Image src="/features-sec.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                        <h1 id='featuresHeader' className='ml-5 mb-3'>Quick Analysis</h1>
                                        <p id='featuresParagh' className='ml-5 mb-3'>Our Quick Chips tool is a powerful addition to your real estate inves- tment arsenal, providing a fast and...</p>
                                    </div>
                                    <div id='featuresThird' className='slides'>
                                        <div id='featuresThirdPicture' className='w-16 h-16 inline-block mr-1 ml-5 mt-5'></div>
                                        <Image src="/features-third.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                        <h1 id='featuresHeader' className='ml-5 mb-3'>Property Types</h1>
                                        <p id='featuresParagh' className='ml-5 mb-3'>REI Deal Analyzer is a versatile tool that can analyze a wide range of property types including single...</p>
                                    </div>
                                    <div id='featuresFourth' className='slides'>
                                        <div id='featuresFourthPicture'className='w-16 h-16 inline-block mr-1 ml-5 mt-5'></div>
                                        <Image src="/features-fourth.svg" width={40} height={10} className='inline relative bottom-7 right-14'/>
                                        <h1 id='featuresHeader' className='ml-5 mb-3'>Prospectus Generator</h1>
                                        <p id='featuresParagh' className='ml-5 mb-3'>Introducing the REI Prospectus Generator, the newest addition to our real estate investment toolkit....</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='sm:hidden relative left-1/3 mt-5'>
                            <button onClick={prev} id='prev'>
                                <Image src='/left-arrow.svg' className='inline-block' width={100} height={10}/>
                            </button>
                            <button onClick={next} id='next'>
                                <Image src='/right-arrow.svg' className='inline relative right-16' width={100} height={10}/>
                            </button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Features;