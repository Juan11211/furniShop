 import React from 'react'
import { features } from '../data';


function FeaturesSecond() {

    const { title, subtitle, image } = features.feature2

    return (
        <div className='section py-8'>
          <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'> 
            
             <div className='flex-1 flex flex-col justify-start lg:justify-center '>
                <h2 className='text-3xl font-bold sm:text-center lg:text-left'>{title}</h2>
                <h4 className='subtitle'>{subtitle}</h4>
              </div>

              <div className='flex-1'>
                <img className='' src={image?.type} alt='feature' />
              </div>
            
            </div>
          </div>
        </div>
      );
    }

export default FeaturesSecond