import { Mitr } from 'next/font/google'
import React from "react";
import Navbar from './navbar';



const fontMNR = Mitr({
  weight: "300",
  subsets: ['latin'],
  variable: '--font-mitr',
})


export default function LayoutPages({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     
<Navbar/>
      <main className={fontMNR.className}>
        {children}
       
      </main>
      <footer className='bottom-0 w-full mt-24'>
       
      </footer>
    </>
  )
}
