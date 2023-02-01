import React from 'react';

// importanje Subheadinga keri se ponuca v kodi
import { SubHeading } from '../../components';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>

      {/* Dodajanje Subheadinga, title props */}
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>The Key to Fine Dining</h1>
      <p className='p__opensans' style={{margin: "2rem 0"}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      
      {/* Button keri je css definerani v App.css */}
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img salmon_img'>
      
  
      <img src={images.salmondes} alt="header img" />
      
    </div>
  </div>
);

export default Header;
