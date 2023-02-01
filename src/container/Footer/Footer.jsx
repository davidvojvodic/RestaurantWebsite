import React from 'react';
import { images } from '../../constants';
import { FooterOverlay, Newsletter} from '../../components';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Gostilna Rajh, Soboška Ulica 32, Bakovci, 9000 Murska Sobota, Slovenija</p>
        <p className='p__opensans'>+386 2 543 90 98</p>
        <p className='p__opensans'>+386 31 705 007</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.rajh} alt="rajh" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Rajh. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
