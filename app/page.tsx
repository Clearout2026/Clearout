'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Process from '@/components/Process'
import Services from '@/components/Services'
import QuoteForm from '@/components/QuoteForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Process />
      <Services />
      <QuoteForm />
      <FAQ />
      <Footer />
    </>
  )
}
