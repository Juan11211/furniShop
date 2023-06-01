import React from 'react'
import ProductSlider from './ProductSlider'
import { products } from '../data'

function Products() {

    const {title, subtitle} = products
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div>
          <h2>{title}</h2>
          <h2>{subtitle}</h2>

        </div>

        <ProductSlider />
      </div>
      
    </section>
  )
}

export default Products
