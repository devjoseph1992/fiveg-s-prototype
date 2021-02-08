import React from 'react'
import {useContext} from 'react';
import {ProductContext} from '../../context';
import Title from '../Title';

//get all unique value
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
};

export default function ProductsFilter({products}) {
  const context = useContext(ProductContext);
  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
  } = context;
  //get unique types
  let types = getUnique(products, 'type');
  //add all
  types = ['all', ...types];
  // map to jsx
  types = types.map((item,index) => {
    return <option value={item} key={index}>{item}</option>
  });
  let stocks = getUnique(products, 'capacity');
  stocks = stocks.map((item,index) => {
    return <option key={index} value={item}>{item}</option>
  })
  return (
    <section className='filter-container'>
      <Title title='search products'/>
      <form className='filter-form'>
        {/* select type */}
          <div className='form-group'>
            <label htmlFor='type'>Product Type</label>
            <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
              {types}
            </select>
          </div>
        {/* end type */}
        {/* select type */}
        <div className='form-group'>
            <label htmlFor='capacity'>Stock</label>
            <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
              {stocks}
            </select>
          </div>
        {/* end type */}
        {/* product price */}
        <div className="form-group">
          <label htmlFor="price">product price P{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of product price*/}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>size</label>
          <div className='size-inputs'>
            <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input'/>
            <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input'/>
          </div>
        </div>
        {/* end of size*/}
        {/* extras*/}
        <div className='form-group'>
          <div className='single-extra'>
            <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange}/>
            <label htmlFor='breakfast'>breakfast</label>
          </div>
          <div className='single-extra'>
            <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange}/>
            <label htmlFor='pets'>pets</label>
          </div>
        </div>
        {/* end extras*/}
      </form>
    </section>
  )
}
