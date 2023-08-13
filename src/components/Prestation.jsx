import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import photo1 from '../assets/pedicure.jpeg';

const Prestation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div name='prestation' className='w-full h-screen bg-[#f1dad1] flex flex-col items-center justify-center'>
      <h1 className='text-4xl mt-20 sm:text-7xl font-extrabold text-black text-center'>
        Prestations
      </h1>
      <div className='w-20 my-2 mt-8'>
        <hr className='border-2 border-black' />
      </div>

      {/* Ensembles alignés horizontalement avec espace */}
      <div className='flex justify-center space-x-20'>
        {/* Premier ensemble */}
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-32 h-32 overflow-hidden'>
            <img src={photo1} alt="pic" className='object-cover w-full h-full' />
          </div>
          <h3 className='mt-4 text-xl font-semibold text-black'>Titre de l'image 1</h3>
          <p className='mt-2 text-base font-medium text-black'>Texte en dessous de l'image 1</p>
        </div>

        {/* Deuxième ensemble */}
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-32 h-32 overflow-hidden'>
            <img src={photo1} alt="pic" className='object-cover w-full h-full' />
          </div>
          <h3 className='mt-4 text-xl font-semibold text-black'>Titre de l'image 2</h3>
          <p className='mt-2 text-base font-medium text-black'>Texte en dessous de l'image 2</p>
        </div>

        {/* Troisième ensemble */}
        <div className='flex flex-col items-center'>
          <div className='rounded-full w-32 h-32 overflow-hidden'>
            <img src={photo1} alt="pic" className='object-cover w-full h-full' />
          </div>
          <h3 className='mt-4 text-xl font-semibold text-black'>Titre de l'image 3</h3>
          <p className='mt-2 text-base font-medium text-black'>Texte en dessous de l'image 3</p>
        </div>
      </div>
    </div>
  );
};

export default Prestation;
