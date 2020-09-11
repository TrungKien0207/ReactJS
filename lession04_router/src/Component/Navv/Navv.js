import React, { Component } from 'react'
import {
   NavLink
} from "react-router-dom";

class Navv extends Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand pl-3" href="/">ReactJS</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse pl-3" id="navbarNavAltMarkup">
                  <ul className="nav navbar-nav">              
                     <li >
                        <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
                     </li>
                     <li >
                        <NavLink activeClassName="active" className="nav-link" to="/product">Sản phẩm</NavLink>
                     </li>
                     <li >
                        <NavLink activeClassName="active" className="nav-link" to="/contact">Liên hệ</NavLink>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
      )
   }
}

export default Navv;