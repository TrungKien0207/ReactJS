import React, { Component } from 'react';

class Header extends Component {
   render() {
      return (
         <div className="header" id="home">
            <div className="slider-text-box">
               <p className="paragraph paragraph-1">
                  Quality Cake ... <br /> with sweet, eggs &amp; breads
               </p>
               <p className="paragraph paragraph-2">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit <br />
                  aut fugit quia consequuntur magni dolores eos qui ratione
               </p>
            </div>
         </div>
      );
   }
}

export default Header;