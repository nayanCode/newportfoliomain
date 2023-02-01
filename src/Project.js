import React from 'react'
import './App.css'
export default function Project() {
    return (
        <div className='container'>
            <section className='m-5'>
                <div className='text-center'>
                    <h1>My Recent Work</h1>
                    <p>Here are a few projects I have worked on recently.</p>
                </div>
                <div className='m-5 row'>
                    <div className='col-4'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgiBVZzLyDpoJlU9LChx7h03qqPikc5tKHB6ZtJpm&s" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#about" className="btn btn-primary">GitHub</a>
                                <a href="#about" style={{ marginLeft: '2rem' }} className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgiBVZzLyDpoJlU9LChx7h03qqPikc5tKHB6ZtJpm&s" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#about" className="btn btn-primary">GitHub</a>
                                <a href="#about" style={{ marginLeft: '2rem' }} className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div class="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgiBVZzLyDpoJlU9LChx7h03qqPikc5tKHB6ZtJpm&s" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#about" className="btn btn-primary">GitHub</a>
                                <a href="#about" style={{ marginLeft: '2rem' }} className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}