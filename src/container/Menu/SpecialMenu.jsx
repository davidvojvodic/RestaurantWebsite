import React from 'react';

// importanje slik pa podatkov za menu
import { images, data } from '../../constants';

// importanje SubHeadinga pa MenuItem keri izriše menu
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id='menu'>
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte" />
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    {/* Prvi menu */}
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu_wine flex__center'>
        <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
        
        {/* Funkcija map za izris itemov */}
        <div className='app__specialMenu-menu_items'>
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      {/* Slika vmes med menuji */}
      <div className='app__specialMenu-menu_img'>
        <img src={images.cockt1} alt="menu" />
      </div>
      
      {/* Drugi menu */}
      <div className='app__specialMenu-menu_cocktails flex__center'>
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className='app__specialMenu-menu_items'>
          {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>

      </div>
    </div>

    {/* Gumb */}
    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
