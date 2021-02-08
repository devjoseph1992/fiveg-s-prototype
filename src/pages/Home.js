import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Hero from './../components/Hero';
import FeaturedProduct from '../components/FeaturedProducts'

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title='High Quality' subtitle='low budget fashion style'>
          <Link to='/products' className='btn-primary'>Shop Now</Link>
        </Banner>
      </Hero>
      <FeaturedProduct/>
    </>
  )
}
