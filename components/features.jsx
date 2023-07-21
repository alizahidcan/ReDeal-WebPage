import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Features(){
    return(
        <div className='relative overflow-hidden'>
            <div className="pb-20 pt-16 sm:pb-30 sm:pt-20 lg:pb-20 lg:pt-30">
                    <div className="mx-auto grid grid-cols-1 md:grid-cols-5 max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="col-span-1 md:col-span-2">
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
                    </div>
                </div>
        </div>
    )
}
export default Features;