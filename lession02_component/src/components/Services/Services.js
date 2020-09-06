import React, { Component } from 'react';

class Services extends Component {
   render() {
      return (
         <div className="main-services" id="services-provide">
            <div className="main-content">
               <p className="main-services-text">Main Services We Provide</p>
               <hr className="HR" />
               <div className="main-container">
                  <div className="main-content-cake">
                     <img src="./baker.png" alt="" />
                     <h4 className="CC4">Celebration Cakes</h4>
                     <p>Duis aute irure dolor in reprehenderit in <br /> volup tate velit esse cillum dolore.</p>
                  </div>
                  <div className="main-content-cake">
                     <img src="./baker_2.png" alt="" />
                     <h4 className="CC4">Celebration Cakes</h4>
                     <p>Duis aute irure dolor in reprehenderit in <br /> volup tate velit esse cillum dolore.</p>
                  </div>
                  <div className="main-content-cake">
                     <img src="./baker_3.png" alt="" />
                     <h4 className="CC4">Celebration Cakes</h4>
                     <p>Duis aute irure dolor in reprehenderit in <br /> volup tate velit esse cillum dolore.</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Services;