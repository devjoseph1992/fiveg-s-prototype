import React from 'react';
import Product from '../Product';

const ProductsList = ({products}) => {
  if (products.lenght === 0) {
    return(
      <div className='empty-search'>
        <h3>unfortunately no products matched your search paramaters</h3>
      </div>
    )
  };
  return (
    <section className='roomslist'>
      <div className='roomslist-center'>
        {
          products.map(item => {
            return <Product key ={item.id} product={item} />
          })
        }
      </div>
    </section>
  )
}

export default ProductsList;