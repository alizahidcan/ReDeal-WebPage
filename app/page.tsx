'use client'
import Image from 'next/image'
import NavBar from '../components/Navbar';
import Banner from '../components/banner';
import MultiColor from '../components/multicolor';
import Steps from '../components/steps';
import Features from '../components/features';
import Logo from '../components/logos';
import Testimonial from '../components/testimonial';
import Footer from '../components/footer';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
        <section>
          <NavBar/>
        </section>
        <section 
          id='banner'
        >
          <Banner/>
        </section>
        <section>
          <MultiColor/>
        </section>
        <section>
          <Steps/>
        </section>
        <section 
          id='features'
        >
          <Features/>
        </section>
        <section>
          <Logo/>
        </section>
        <section>
          <Testimonial/>
        </section>
        <section>
          <Footer/>
        </section>
    </div>
  )
}
