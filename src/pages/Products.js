import React from 'react';
import { Link } from 'react-router-dom'
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import ProductsContainer from '../components/ProductsContainer';

const Products = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner title='our products'>
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <ProductsContainer/>
    </>
  )
}

export default Products
