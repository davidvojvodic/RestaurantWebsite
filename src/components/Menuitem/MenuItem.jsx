import React from 'react';

import './MenuItem.css';

// Propsi title, price, tags za izpis podatkov
const MenuItem = ({title, price, tags}) => (
  <div className='app__menuitem'>

    {/* Zgornji del, ime pa cena */}
    <div className='app__menuitem-head'>
      <div className='app__menuitem-name'>
        <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      </div>

      {/* Vmesna črta */}
      <div className='app__menuitem-dash' />

      <div className='app__menuitem-price'>
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>
    {/* Spodnji del, sestavine */}
    <div className='app__menuitem-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{tags}</p>

    </div>
  </div>
);

export default MenuItem;
