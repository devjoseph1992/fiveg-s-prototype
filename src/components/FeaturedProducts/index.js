import React, { Component } from 'react';
import { ProductContext } from '../../context'
import Loading from '../Loading';
import './style.css';

export default class FeaturedProduct extends Component {
  static contextType = ProductContext
  render() {
    const {featuredProducts : products } =this.context
    console.log(products);
    return (
      <div>
        hello FeaturedProduct

        <Loading/>
      </div>
    )
  }
}
