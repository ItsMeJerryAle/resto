import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Gallery = () => {
  return (
  
  <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color: "#AAA", marginTop: '2rem'}}>
        <button type='button' className='"custom__button'>View More</button>
        </p>
      </div>
  </div>
)};

export default Gallery;
