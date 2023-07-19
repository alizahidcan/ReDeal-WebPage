import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function MultiColor(){

    return(
        <div className="relative overflow-hidden">
            <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                <div className="mx-auto grid grid-cols-2 md:grid-cols-6 max-w-7xl px-4 sm:px-6 md:px-8">
                    <div className="col-span-2">
                        <h1 className="font-bold tracking-tight text-3xl md:text-5xl">
                            <span id='multiFirstWrite'>We do our best facilities provide you</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                        </p>
                        <a
                            id='multiBtn'
                            href="#"
                            className="inline-block mt-4 rounded-xl border border-transparent px-7 py-3 text-center font-medium text-white"
                            >
                            Contact Us Now
                        </a>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-4 col-span-2 md:col-span-4 gap-y-10 gap-x-5 md:ml-8 mt-10 md:mt-0'>
                        <div id='props' className='col-span-1'>
                            <Image src="/apart.svg" width={60} height={30} className='xl:ml-14 lg:ml-9 md:ml-4 sm:ml-28 ml-12 mt-5 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Apartment</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/ofice.svg" width={60} height={30} className='xl:ml-14 lg:ml-9 md:ml-4 sm:ml-28 ml-12 mt-5 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Office Building</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/dublex.svg" width={70} height={30} className='xl:ml-14 lg:ml-8 md:ml-4 sm:ml-28 ml-12 mt-5 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Duplex</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/stripmall.svg" width={65} height={30} className='xl:ml-12 lg:ml-8 md:ml-3 sm:ml-28 ml-12 mt-7 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Strip Mall</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/industrial.svg" width={70} height={30} className='xl:ml-14 lg:ml-8 md:ml-3 sm:ml-28 ml-12 mt-5 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Industrial</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/house.svg" width={60} height={30} className='xl:ml-14 lg:ml-9 md:ml-4 sm:ml-28 ml-12 mt-5 mb-2'/>
                            <h1 className='text-center mb-3 sm:mb-0 lg:mb-5'>single family house</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/trailerpark.svg" width={60} height={30} className='xl:ml-14 lg:ml-9 md:ml-4 sm:ml-28 ml-12 mt-5 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Trailer Park</h1>
                        </div>
                        <div id='props' className='col-span-1'>
                            <Image src="/vacation.svg" width={60} height={30} className='xl:ml-14 lg:ml-9 md:ml-4 sm:ml-28 ml-12 mt-4 mb-2'/>
                            <h1 className='text-center mb-3 md:mb-0 lg:mb-5'>Vacation Rental</h1>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}
export default MultiColor;