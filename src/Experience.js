import React, { useState } from 'react';
import './expcss.css';
export default function Experience() {
  const [stegofy, stegofyclicked] = useState(true);
  const [apple, appleclicked] = useState(false);
  const [google, googleclicked] = useState(false);
  const [microsoft, microsoftclicked] = useState(false);

  const handle=(input)=>{
if(input=="stegofy"){
  stegofyclicked(true);
  appleclicked(false);
  googleclicked(false);
  
}
else if(input=="apple"){
  stegofyclicked(false);
  appleclicked(true);
  googleclicked(false);
}
else if(input=="google"){
  stegofyclicked(false);
  appleclicked(false);
  googleclicked(true);
}
  }
  return (
    <div style={{marginTop:"60px"}}>
      <h2>Where I’ve Worked</h2>
      <div class="row">
        <div class="col-2">
          <div className='workedname' onClick={() => handle("stegofy")}>Stegofy</div>
          {/* <div className='workedname' onClick={() => handle("apple")}>Apple</div>
          <div className='workedname' onClick={() => handle("google")}>Google</div>
          <div className='workedname' onClick={() => handle("microsoft")}>Microsoft</div> */}
        </div>
        <div class="col-10">
          {stegofy ? 
          <div className='exp1'>
            <div className='headdetails'>
              <h3>Full Stack Web Developer @Stegofy </h3>
              <p className='range'>December 2021 - January 2022</p>
              <div>
              <ul class="list-unstyled listclass">
                  <li ><i class="fas fa-caret-right"></i>Worked on stegofy.com webapp, core aim is to authenticate products before purchase get complete information about
the product with a single scan.
</li>
                  <li><i class="fas fa-caret-right"></i>Analayzed and modified Login and Signup system, intergrated email and OTP autentication, created mutliple UI
componets.</li>
                  <li><i class="fas fa-caret-right"></i>Skills Used : <b>ReactJs, NodeJs, SQL, Tailwind CSS</b></li>
                </ul>
              </div>
            </div>
          </div>:<></>}

          {google ? 
          <div className='exp1'>
            <div className='headdetails'>
              <h3>Software Enginner @Google</h3>
              <p className='range'>May 2018 - Present</p>
              <div>
                <ul class="list-unstyled listclass">
                  <li ><i class="fas fa-caret-right"></i>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                  <li><i class="fas fa-caret-right"></i>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                  <li><i class="fas fa-caret-right"></i>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
                </ul>
              </div>
            </div>
          </div>:<></>}

          {apple ? 
          <div className='exp1'>
            <div className='headdetails'>
              <h3>Web Developer @Apple</h3>
              <p className='range'>December 2021 - January 2022</p>
              <div>
                <ul class="list-unstyled listclass">
                  <li ><i class="fas fa-caret-right"></i>Worked on stegofy.com webapp, core aim is to authenticate products before purchase get complete information about
the product with a single scan.
</li>
                  <li><i class="fas fa-caret-right"></i>Analayzed and modified Login and Signup system, intergrated email and OTP autentication, created mutliple UI
componets.</li>
                  <li><i class="fas fa-caret-right"></i>Skills Used: ReactJs, NodeJs, SQL, Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>:<></>}

        </div>

      </div>
    </div>
  )
}
