'use client'
import Image from 'next/image'
import NavBar from '../components/Navbar';
import Banner from '../components/banner';
import MultiColor from '../components/multicolor';
import Steps from '../components/steps';
import Features from '../components/features';
import Logo from '../components/logos';
import { useState } from 'react';

export default function Home() {
  return (
    <div>
        <NavBar/>
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
          <h1>call</h1>
        </section>
        <section>
          <h1>testim</h1>
        </section>
    </div>
  )
}
