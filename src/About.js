import React from 'react'
import './App.css'

export default function About
    () {
    return (
        <div >
            <section className='AboutMain'>
                <h2 className='text-center'>About Me</h2>
                <div className='row mx-4 my-4'>
                    <div className='col-6'>
                        <div className='textBox'>
                            <p>
                                Hello! My name is Brittany and I enjoy creating things that live on the internet.
                                My interest in web development started back in 2012 when I decided to try editing
                                custom Tumblr themes — turns out hacking together a custom reblog button taught me a
                                lot about HTML & CSS!
                            </p>
                            <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up,
                                a huge corporation, and a student-led design studio. My main focus these days is building accessible,
                                inclusive products and digital experiences at Upstatement for a variety of clients.</p>
                            <p>
                                I also recently launched a course that covers everything you need
                                to build a web app with the Spotify API using Node & React.
                            </p>
                            <p>
                                Here are a few technologies I’ve been working with recently:
                            </p>
                        </div>
                        <div className='row'>
                        <ul class="list-unstyled listclass col-6">
                  <li ><i class="fas fa-caret-right"></i>JavaScript (ES6+)</li>
                  <li><i class="fas fa-caret-right"></i>React</li>
                  <li><i class="fas fa-caret-right"></i>Node.js</li>
                </ul>
                <ul class="list-unstyled listclass col-6">
                  <li ><i class="fas fa-caret-right"></i>C++</li>
                  <li><i class="fas fa-caret-right"></i>Python</li>
                  <li><i class="fas fa-caret-right"></i>MongoDB</li>
                </ul>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='profileImage'>
                            <img class="img-fluid img-thumbnail" src="/profile_image.jpg"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}