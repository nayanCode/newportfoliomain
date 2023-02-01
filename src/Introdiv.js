import React from 'react'
import { Button } from 'react-bootstrap'
import './App.css';


export default function Introdiv() {
    return (
        <div className='mainclass'>
            <div className="secmain">
                <div>
                <h1 className='nameis'>Hi, my name is</h1>
            </div>
            <div>
                <h2 className='bigheading'>Nayan Shingare .</h2>
            </div>
            <div>
                <h3 className='bigheading bigheading1'>I build things for the web.</h3>
            </div>
            <div className='plineparent'>
                <p className='pline'>
                I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                </p>
            </div>
            <div className='buttongithub'>
            <button type="button" class="btn btn-outline-info p-3 w-100">Check Out Our Github!</button>
            </div>
            </div>
        </div>
    )
}
