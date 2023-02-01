import React from 'react';

// importanje images, SubHeadinga, BsInstagram ikone za uporabo v file
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';

// Dodajanje vseh slik v array galleryImages
const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

// Konstanta za scroll, uporabin scrollRef za useRef(null). Konstanta scroll uporabi direction. Če je trenuten scroll left, se pomekne za 300px v lefo,...
const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else{
      current.scrollLeft += 300;
    }
  }

  return (
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>

      {/* Dodajanje SubHeadinga */}
      <SubHeading title="Instagram"  />
      <h1 className='headtext__cormorant'>Photo Gallery</h1>
      <p className='p__opensans' style={{color: "#AAA", marginTop: "2rem"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>

    <div className='app__gallery-images'>
      {/* Container za slike, uporabla scrollRef, funkcija map() se uporabi za izris vse slik v galleryImages */}
      <div className='app__gallery-images_container' ref={scrollRef}>
        {galleryImages.map((image, index) => (
          <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      {/* Dodajo se puščice z onClick funkcijami za scroll */}
      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll("left")} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll("right")} />
      </div>
    </div>
  </div>
  );
  }
export default Gallery;
