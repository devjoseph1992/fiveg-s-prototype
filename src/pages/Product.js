import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import defaultBcg from '../images/defaultBcg.jpeg';
import Banner from '../components/Banner';
import { ProductContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slug:this.props.match.params.slug,
      defaultBcg
    }
  }
  static contextType = ProductContext;
  // componentDidMount(){}

  render() {
    const {getProduct} = this.context;
    const product = getProduct(this.state.slug);
    
    if(!product){
      return <div className='error'>
        <h3>No product match</h3>
        <Link to='/products' className='btn-primary'>
          Back to shop
        </Link>
      </div>
    }
    const { name, description, capacity, size, price, extras, breakfast, pets, images} = product;
    const [mainImg,...defaultImg] =images;
    return (
      <>
        {/* <StyledHero img={images[0] || this.state.defaultBcg}> */}
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} product`}>
            <Link to='/products' className='btn-primary'>Back to shop</Link>
          </Banner>
        </StyledHero>
        <section className='single-room'>
          <div className='single-room-images'>
            {/* {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })} */}
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />
            })}
          </div>
          <div className='single-room-info'>
            <article className='desc'>
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className='info'>
              <h3>info</h3>
              <h6>Prize : P{price}</h6>
              <h6>size : {size}</h6>
              <h6>capacity : {''} {
                capacity > 1 ? `${capacity} people` : `${capacity} person`
              }
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className='room-extras'>
          <h6>extras</h6>
          <ul className='extras'>
            {extras.map((item, index) => {
              return <li key={index}>* {item}</li>
            })}
          </ul>
        </section>
      </>
      
    )
  }
}
