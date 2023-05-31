import React from 'react';
import { newInStore } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

function NewItemSlider() {
  return (
    <Swiper>
      {newInStore.products.map((product, index) => {
        return <SwiperSlide key={index}>
            <div>
                <img src={product.image.type} alt='product' />
            </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
}

export default NewItemSlider;
