// importanje useState za prikazovanje hamburger menuja na tablici pa telefoni
import React, {useState} from 'react';

// importanje ikone hamburger menuja za tablico pa telefon
import { GiHamburgerMenu } from 'react-icons/gi';
// importanje ikone za zaperanje hamburger menuja
import { MdOutlineRestaurantMenu } from 'react-icons/md';
// importanje slik iz images
import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {

  // priprava useState-a za komponento
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
  <nav className='app__navbar'>
    
    {/* Logo v nagivation bari */}
    <div className='app__navbar-logo'>
      <img src={images.rajh} alt="app logo" />
    </div>

    {/* Linki v navigation bari z opensans pisavo iz App.css */}
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#menu'>Menu</a></li>
      <li className='p__opensans'><a href='#awards'>Awards</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>

    {/* Login v navigation bari */}
    <div className='app__navbar-login'>
      <a href='#login' className='p__opensans'>Log In / Register</a>
      {/* Prazen div za vmesno črto */}
      <div />
      {/* Book table */}
      <a href='/' className='p__opensans'>Book Table</a>
    </div>

    {/* Div za menu za menše naprave */}
    <div className='app__navbar-smallscreen'>
      {/* Gda je max-width ekrana 1150px se prikaže hamburger menu in se zbrišejo linki v navigationbari.
      Gda je toggleMenu true se odpre drugačen menu za menše naprave */}
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (


      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
        <ul className='app__navbar-smallscreen-links'>
          <li className='p__opensans'><a href='#home'>Home</a></li>
          <li className='p__opensans'><a href='#about'>About</a></li>
          <li className='p__opensans'><a href='#menu'>Menu</a></li>
          <li className='p__opensans'><a href='#awards'>Awards</a></li>
          <li className='p__opensans'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
  )}
    </div>
  </nav>
)
};

export default Navbar;
