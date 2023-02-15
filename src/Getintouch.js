import React from 'react'
import './App.css';


export default function Getintouch() {
    return (
        <div className='container'>
            <section className='m-5'>
                <div className='m-5 d-flex justify-content-center'>
                    <div style={{ width: '30rem' }} className='text-center'>
                        <h1>Get In Touch</h1>
                        <p className='my-4'>Although I’m not currently looking for any new opportunities,
                            my inbox is always open. Whether you have a question or just want to say hi,
                            I’ll try my best to get back to you!
                        </p>
                        <div class="btn-group" role="group">
                            <div className='buttongrp'>
            <a href="https://github.com/nayanCode" role="button" class="btn btn-outline-danger"><i class="bi bi-instagram --bs-primary"></i></a>
            </div>
         
            </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}