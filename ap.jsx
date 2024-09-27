import React from 'react';
import { WithProductList } from "./day6/withProductlist";
import ProductListComponent from "./day6/productlist";
const Products =[
  {id: 1, name: "Product 1", price:999.99 ,imageUrl: 'images/pro1.jpg'} ,
  {id: 2, name: "Product 2", price:899.99 ,imageUrl: 'images/pro2.jpg'} 

];
const EnhancedProductList = WithProductList(ProductListComponent , Products);
function Ima() {
  return (
   <div>
      <h1>
        App Title
      </h1>
      <EnhancedProductList/>

   
       </div>
  )
}

export default Ima;
