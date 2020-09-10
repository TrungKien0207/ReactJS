import React, { Component } from 'react';
import Items from './Items/Items';

class Products extends Component {
   render() {
      return (
         <nav className="pt-3 pl-5 pr-5">
            <div className="row row-cols-1 row-cols-md-3">
               <Items>Biển Phú Quốc</Items>
               <Items>Bai bien</Items>
               <Items>Biển Phú Quốc</Items>
               <Items>Biển Phú Quốc</Items>
               <Items>Biển Phú Quốc</Items>
               <Items>Biển Phú Quốc</Items>
            </div>
         </nav>
      );
   }
}

export default Products;