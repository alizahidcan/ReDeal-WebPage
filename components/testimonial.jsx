import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Testimonial() {
    const [curr, setCurr] = useState(0);
    const prev = () => setCurr((curr) => (curr===0 ? 2 -1 : curr-1))
    const next = () => setCurr((curr) => (curr===  1 ?0 : curr+1))
    
    return(
        <div className="relative overflow-hidden">
            <div className="pt-16 sm:pt-20 lg:pt-30 lg:-mb-96 xl:-mb-52">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 md:px-8">
                    <div id='leftSide' className="hidden lg:flex col-span-1 object-cover bg-no-repeat bg-contain mt-20 xl:mt-0">
                        <div id='leftFirst' className='relative lg:top-20 xl:top-28 lg:left-20 xl:left-36 lg:mr-10 xl:mr-10'>
                            <Image src="/left-first.svg" width={100} height={10}/>
                        </div>
                        <div id='leftSec' className='relative lg:top-24 xl:top-32 lg:left-2/4 xl:left-96'>
                            <Image src="/left-sec.svg" width={50} height={10}/>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h1 id='rightSideHeader' className=' text-center'>What Says Our Customer</h1>
                        <div className='hidden lg:block rightContent mt-10 w-5/6 ml-6 sm:ml-12'>
                            <div id='stars' className='flex ml-5 mb-2 pt-5'>
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                            </div>
                            <p className='contentParagh ml-5 mr-5 md:text-2xl'>
                            “ There are many variations of passages of a Lorem Ipsum available, but the majority is for have suffered alteration.
                            </p>
                            <div id='profile' className='flex relative top-10 lg:top-0 items-center ml-5 lg:mt-6'>
                                <Image src="/profile-picture.png" width={60} height={10}/>
                                <div>
                                    <strong className='ml-2'>Sabo Masties</strong>
                                    <span className='block ml-2'>From Amazon</span>
                                </div>
                            </div>
                            <span id='profileBack' className='relative left-2/4 sm:left-3/4 bottom-1/4 lg:bottom-2/4'>“</span>
                        </div>
                        <div className='rightContent hidden lg:block mt-10 w-5/6 ml-6 sm:ml-12'>
                            <div id='stars' className='flex ml-5 mb-2 pt-5'>
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                                <Image src="/star.svg" width={20} height={10} />
                            </div>
                            <p className='contentParagh ml-5 mr-5 md:text-2xl'>
                            “ There are many variations of passages of a Lorem Ipsum available, but the majority is for have suffered alteration.
                            </p>
                            <div id='profile' className='flex relative top-10 lg:top-0 items-center ml-5 lg:mt-6'>
                                <Image src="/profile-picture.png" width={60} height={10}/>
                                <div>
                                    <strong className='ml-2'>Sabo Masties</strong>
                                    <span className='block ml-2'>From Amazon</span>
                                </div>
                            </div>
                            <span id='profileBack' className='relative left-2/4 sm:left-3/4 bottom-1/4 lg:bottom-2/4'>“</span>
                        </div>
                        
                        {/* For Mobile */}
                        <div id='container' className="lg:hidden mx-auto px-4">
                            <div id='carousel' className='relative overflow-hidden'>
                                <div id='sliderSec' className='mt-14 transition-transform ease-out duration-500 flex' 
                                style={{transform:`translateX(-${curr*52}%)`}}>
                                    <div className='rightContent lg:hidden mt-10 w-5/6 ml-6 sm:ml-12'>
                                        <div id='stars' className='flex ml-5 mb-2 pt-5'>
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                        </div>
                                        <p className='contentParagh ml-5 md:text-2xl'>
                                        “ There are many variations of passages of a Lorem Ipsum available, but the majority is for have suffered alteration.
                                        </p>
                                        <div id='profile' className='flex relative top-10 lg:top-0 items-center ml-5 lg:mt-6'>
                                            <Image src="/profile-picture.png" width={60} height={10}/>
                                            <div>
                                                <strong className='ml-2'>Sabo Masties</strong>
                                                <span className='block ml-2'>From Amazon</span>
                                            </div>
                                        </div>
                                        <span id='profileBack' className='relative left-2/4 sm:left-3/4 bottom-1/4 lg:bottom-2/4'>“</span>
                                    </div>
                                    <div className='rightContent lg:hidden mt-10 w-5/6 ml-6 sm:ml-12'>
                                        <div id='stars' className='flex ml-5 mb-2 pt-5'>
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                            <Image src="/star.svg" width={20} height={10} />
                                        </div>
                                        <p className='contentParagh ml-5 md:text-2xl'>
                                        “ There are many variations of passages of a Lorem Ipsum available, but the majority is for have suffered alteration.
                                        </p>
                                        <div id='profile' className='flex relative top-10 lg:top-0 items-center ml-5 lg:mt-6'>
                                            <Image src="/profile-picture.png" width={60} height={10}/>
                                            <div>
                                                <strong className='ml-2'>Sabo Masties</strong>
                                                <span className='block ml-2'>From Amazon</span>
                                            </div>
                                        </div>
                                        <span id='profileBack' className='relative left-2/4 sm:left-3/4 bottom-1/4 lg:bottom-2/4'>“</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:hidden relative left-1/3 sm:left-1/4 md:left-80 mt-5'>
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
      </div>
    )
}

export default Testimonial;