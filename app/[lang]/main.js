"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import { main } from '../data/main'

const Main = ({ children }) => {

  return (
    <>
      <Header />
      <main className="indexPag">{children}</main>
      <Footer />
    </>
  )
}

export default Main