import React, { Component } from 'react';

class Menu extends Component {
   render() {
      return (
         <div className="container">
            <div className="menu-area">
               <nav className="menu-content">
                  <ul>
                     <li>
                        <a className="link" href="#home" title="Home">Home</a>
                     </li>
                     <li>
                        <a className="link" href="#introductory" title="Introductory">Introductory</a>
                     </li>
                     <li>
                        <a className="link" href="#buy" title="Buy">Buy</a>
                     </li>
                     <li>
                        <a className="link" href="#detail" title="Detail">Detail</a>
                     </li>
                     <li>
                        <a className="link" href="#services-provide" title="Services Provide">Services Provide</a>
                     </li>
                  </ul>
               </nav>
            </div>
         </div>
      );
   }
}

export default Menu;