
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Main = ({ children }) => {
  return (
    <>
    
    <Header /> 
    <main className="indexPag">{children}</main>
    <Footer  />
    </>
  )
}

export default Main