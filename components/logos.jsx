import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Logo(){
    return(
        <div className="bg-white py-16 sm:py-22">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <h2 className="text-center text-lg font-semibold leading-8">
                    <span id='logoFirstWrite'>We Have <span id='logoSecWrite'>20+</span> Satisfied Clients</span>
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-14 lg:mx-0 lg:max-w-none lg:grid-cols-7">
                    <img
                    className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src="/logos-logo1.svg"
                    alt="AXW"
                    width={112}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src="/logos-logo2.svg"
                    alt="Lenovo"
                    width={112}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src="/logos-logo3.svg"
                    alt="Slack"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src="/logos-logo4.svg"
                    alt="Youtube"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src="/logos-logo5.svg"
                    alt="Amazon"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    src="/logos-logo6.svg"
                    alt="Google"
                    width={158}
                    height={48}
                    />
                    <img
                    className="col-span-4 max-h-10 w-full object-contain hidden lg:grid lg:col-span-1"
                    src="/logos-logo7.svg"
                    alt="Microsoft"
                    width={158}
                    height={48}
                    />
                </div>
            </div>
        </div>
    )
}
export default Logo;