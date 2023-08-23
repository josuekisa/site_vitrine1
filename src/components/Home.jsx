import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import photo1 from '../assets/nail.jpeg';
import 'animate.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      name='home'
      className='w-full h-screen overflow-hidden bg-cover bg-no-repeat p-12 text-center relative'
      style={{
        backgroundImage: `url(${photo1})`, // Utilisez votre image de fond ici
        backgroundPosition: 'center',
      }}
    >
      {/* Fond semi-transparent */}
      <div
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', height: '100%' }}
      >
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10'>
          <div class="flex h-full items-center justify-center ">
            <div class="text-white ">
              <h2 class="mb-4 text-4xl font-semibold  animate__animated animate__backInDown">Esthetic Du Monde</h2>
              <h4 class="mb-6 text-xl font-semibold animate__animated animate__fadeIn">Votre Salon de Beauté,manicure,Epilation sur Toulouse</h4>
              <button
                name='prestation'
                type="button"
                class="animate__animated animate__backInUp rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Prestation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
