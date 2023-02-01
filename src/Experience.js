import React, { useState } from 'react';
import './expcss.css';
export default function Experience() {
  const [stegofy, stegofyclicked] = useState(true);
  const [apple, appleclicked] = useState(false);
  const [google, googleclicked] = useState(false);
  const [microsoft, microsoftclicked] = useState(false);
  const [tcs, tcsclicked] = useState(false);

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
    <div>
      <h2>Where I’ve Worked</h2>
      <div class="row">
        <div class="col-2">
          <div className='workedname' onClick={() => handle("stegofy")}>Stegofy</div>
          <div className='workedname' onClick={() => handle("apple")}>Apple</div>
          <div className='workedname' onClick={() => handle("google")}>Google</div>
          <div className='workedname' onClick={() => handle("microsoft")}>Microsoft</div>
          <div className='workedname' onClick={() => handle("tcs")}>TCS</div>
        </div>
        <div class="col-10">
          {stegofy ? 
          <div className='exp1'>
            <div className='headdetails'>
              <h3>Full Stack Web Developer @Stegofy </h3>
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

        </div>

      </div>
    </div>
  )
}
