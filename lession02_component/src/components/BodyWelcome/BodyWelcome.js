import React, { Component } from 'react';
import Items from './Items/Items';

class BodyWelcome extends Component {
   render() {
      return (
         <div className="welcome_bakery_area" id="introductory">
            <div className="body-welcome">
               <div className="welcome-text">
                  <div className="text-1">
                     <h2>Welcome to our Bakery</h2>
                     <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                        nisi ut aliquid ex ea commodi consequatur uis autem vel eum.
                     </p>
                  </div>
                  <div className="text-2">
                     <p>
                        Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.
                        To take a trivial example, which of us ever undertakes laborious physical exercise.
                     </p>
                  </div>
               </div>
               <div className="welcome-image">
                  <img src="./welcome-right.jpg" alt="girl-and-cakes" />
               </div>
            </div>
            <hr className="unline" />

            {/* Các thẻ bánh */}
            <div className="welcome-bakery-buy" id="buy">
               <div className="main-title">
                  <p className="title-1"> Our Featured Cakes</p>
                  <p className="title-2"> Seldolor sit amet consect etur</p>
               </div>
               {/* list item */}
               <div className="cake_feature_slider owl-carousel">
                  <div className="item">
                     
                     {/* import items */}
                     <Items price="$29" images="./c-feature-1.jpg">Strawberry Cupcakes</Items> 
                     <Items price="$30" images="./c-feature-2.jpg">Orange Cupcakes</Items> 
                     <Items price="$25" images="./c-feature-3.jpg">Cherry Cupcakes</Items> 
                     <Items price="$32" images="./c-feature-4.jpg">Banana Cupcakes</Items> 

                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default BodyWelcome;