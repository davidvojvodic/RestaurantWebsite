import React from 'react';
import {images} from '../../constants'

// Subheading keri se lejko na strani večkrat ponuca, dobi props title pa sliko nad napison
const SubHeading = ({title}) => (
  <div style={{marginBottom: "1rem"}}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon" className='spoon__img' />
  </div>
);

export default SubHeading;
