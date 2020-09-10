import React, { Component } from 'react'

class Navv extends Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <a className="navbar-brand pl-3" href="./index.html">ReactJS</a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse pl-3" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <a className="nav-link active" href="./home.html"> Trang chủ <span className="sr-only">(current)</span></a>
                     <a className="nav-link" href="#">Sản phẩm </a>
                     <a className="nav-link" href="#"> Liên hệ </a>
                  </div>
               </div>
            </nav>
         </div>
      )
   }
}

export default Navv;