'use client'
import Image from 'next/image'
import NavBar from '../components/Navbar';
import Banner from '../components/banner';
import MultiColor from '../components/multicolor';
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
          <h1>steps</h1>
        </section>
        <section 
          id='features'
        >
          <h1>features</h1>
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
