import React from 'react';
import { features } from './data';

function Features() {
  return (
    <div className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
        {features.map((feature) => (
          <div key={feature.id}>
            <img className='h-[50px] ' src={feature.image.type} alt={feature.title} />
            <h2>{feature.title}</h2>
            <p>{feature.subtitle}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Features;
