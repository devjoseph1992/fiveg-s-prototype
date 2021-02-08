import React from 'react'
import ProductsFilter from '../ProductsFilter';
import ProducstList from '../ProductsList';
import { withProductConsumer } from '../../context';
import Loading from '../Loading';

function ProductContainer ({context}) {
  const  {loading, sortedProducts, products } = context;
  if(loading) {
    return <Loading/>;
  }
  return (
    <>
      <ProductsFilter products={products}/>
      <ProducstList products={sortedProducts}/> 
    </>            
  );
}

export default withProductConsumer(ProductContainer)


// import React from 'react'
// import ProductsFilter from '../ProductsFilter';
// import ProducstList from '../ProductsList';
// import { ProductConsumer } from '../../context';
// import Loading from '../Loading';

// export default function ProductsContainer() {
//   return (
//     <ProductConsumer>
//       {value => {
//         const {loading, sortedProducts, products} = value;
//         if(loading) {
//           return <Loading/>;
//         }
//         return (
//           <div>
//             Products Containers
//             <ProductsFilter products={products}/>
//             <ProducstList products={sortedProducts}/> 
//           </div>            
//           )
//         }
//       }
      
//     </ProductConsumer>

//   )
// }
