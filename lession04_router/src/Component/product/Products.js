import React, { Component } from 'react';
import Items from './Items/Items';
import myData from './Items/data.json';

class Products extends Component {
   format_curency = (price) => {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
   }

   render() {
      console.log(myData);
      return (
         <nav className="pt-3 pl-5 pr-5">
            <div className="row row-cols-1 row-cols-md-3">
               {
                  myData.map((value, key) => {
                     return (
                        <Items pid={ value.id } price={ this.format_curency(value.gia) } key={key} >{ value.ten }</Items>
                     );
                  })
               }
            </div>
         </nav>
      );
   }
}

export default Products;