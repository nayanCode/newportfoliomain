import React from 'react'
import Introdiv from './Introdiv'
import About from './About'
import Experience from './Experience'
import Getintouch from './Getintouch'
import Project from './Project'
import './App.css'

export default function Body() {
  return (
    <div className='rootclass'>
         <Introdiv/>
         <About/>
         <Experience/>
         <Getintouch/>
         <Project/>
    </div>
  )
}
