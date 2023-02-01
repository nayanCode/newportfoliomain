import React from 'react'
import Introdiv from './Introdiv'
import Aboutus from './Aboutus'
import Experience from './Experience'
import Getintouch from './Getintouch'
import './App.css'

export default function Body() {
  return (
    <div className='rootclass'>
         <Introdiv/>
         <Aboutus/>
         <Experience/>
         <Getintouch/>
    </div>
  )
}
