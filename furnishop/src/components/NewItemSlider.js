import React from 'react';
import { newInStore } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function NewItemSlider() {
  return (
    <Swiper grabCursor={true} breakpoints={{
        320: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }} >
      {newInStore.products.map((product, index) => {
        return (
        <SwiperSlide className='max-w-[265px]' key={index}>
            <div className='relative'>
                <img src={product.image.type} alt='product' />
                <div className='absolute text-black bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>
                    {product.name}
                </div>
            </div>
        </SwiperSlide>
      )})}
    </Swiper>
  );
}

export default NewItemSlider;
