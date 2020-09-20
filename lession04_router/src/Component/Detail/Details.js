import React, { Component } from 'react';
import myData from './../product/Items/data.json';

class Details extends Component {
   format_curency = (price) => {
      return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
   }

   render() {
      let child = parseInt(this.props.match.params.id, 10);

      return (
         <div>
            {
               myData.map((value, key) => {
                  if(value.id === child) {
                     return (
                        <div className="p-5" key={ key }>
                           <h1>Tên tour: { value.ten }</h1>
                           <h2>Giá: { this.format_curency(value.gia) + ' VND' }</h2>
                        </div>
                     )
                  }
               })
            }
         </div>
      );
   }
}

export default Details;