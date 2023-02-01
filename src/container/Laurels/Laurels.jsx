import React from 'react';

// importanje images, data pa Subheadinga
import { images, data } from '../../constants';
import { SubHeading } from '../../components';
import './Laurels.css';


// Konstanta AwardCarc v kero dan award kak props, kera ma propertyje imgUrl, title pa subtitle
const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className='app__laurels_awards-card'>
    <img src={imgUrl} alt="award" />
    <div className='app__laurels_awards-card_content'>
      <p className='p__cormorant' style={{color: "#DCCA87"}}>{title}</p>
      <p className='p__opensans'>{subtitle}</p>
    </div>
  </div>
)


const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className='app__wrapper_info'>
      {/* Dodajanje subheadinga */}
      <SubHeading title="Awards & Recognition" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      {/* z funkcijo map() izpis podatkov iz data, konstanto awards pa vse njene propertyje. Dodelin prop award, izpiše se konstana AwardCard napravlena prle */}
      <div className='app__laurels_awards'>
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className='app__wrapper_img steak_img'>
      <img src={images.steak1} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
