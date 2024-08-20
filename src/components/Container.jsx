import React from "react";
// import { Tilt } from 'react-tilt';
import  "./ProjectSection/Project.css";
import Tilt from 'react-parallax-tilt';

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     false,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  glare:           true,
  'max-glare':     1
}

const Container = ({Img, subTitle, title}) => {
  return (
    <Tilt options={defaultOptions} className="card1">
    <div className=" data-tilt" >
    <div className="card1__img">
      <img src={Img} alt="Image" />
    </div>
    <div className="card1__subtitle">{subTitle}</div>
    <div className="card1__wrapper">
        <div className="card1__title">{title}</div>
        <div className="card1__icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M262.62 336L342 256l-79.38-80M330.97 256H170"/><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/></svg>
        </div>

    </div>
</div>
</Tilt>
  );
};

export default Container;
