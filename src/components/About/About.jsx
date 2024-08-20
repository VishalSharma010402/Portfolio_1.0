import React from 'react';
import "./About.css";
import Spline from '@splinetool/react-spline';



const About= () => {
  return (
    <section id='about' className='about'>
      <div className="Container">
      <Spline scene="https://prod.spline.design/mHBCVZAlCSFjbDHs/scene.splinecode" />

        <div className="textContainer">
          <h3>About ME</h3>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa perspiciatis quasi soluta, ab saepe natus? Nisi sequi voluptatibus earum quam. Tempora praesentium eius voluptatibus illo deleniti nostrum excepturi vero.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio culpa perspiciatis quasi soluta, ab saepe natus? Nisi sequi voluptatibus earum quam.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;