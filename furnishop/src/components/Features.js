import React from 'react';
import { features } from '../data';

function Features() {
  const { image, title, subtitle, buttonText, items } = features;

  return (
    <div className='section py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-8'>
          <div className='flex-1 order-1 lg:-order-1'>
            <img src={image.type} alt='feature' />
          </div>
          <div className='flex-1 flex flex-col justify-start lg:justify-center '>
            <h2 className='text-3xl font-bold sm:text-center lg:text-left'>{title}</h2>
            <h4 className='subtitle'>{subtitle}</h4>

            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;
                return (
                  <div className='flex mb-6 lg:last:mb-0'>
                    <div className='text-2xl mr-4 lg:text-3xl'>{icon}</div>
                    <div className='text-base lg:text-xl font-semibold mb-3 ml-2'>{title}</div>
                    <div className='flex justify-center mx-auto mr-3'>{subtitle}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
