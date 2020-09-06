import React, { Component } from 'react';

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
                     <div className="cake-feature-item">
                        <div className="cake-img">
                           <img src="./c-feature-1.jpg" alt="" />
                        </div>
                        <div className="cake-text">
                           <h4 className="money">$29</h4>
                           <h3 className="cake-name">Strawberry Cupcakes</h3>
                           <a className="pest-btn" href="#">Add to cart</a>
                        </div>
                     </div>
                     <div className="cake-feature-item">
                        <div className="cake-img">
                           <img src="./c-feature-2.jpg" alt="" />
                        </div>
                        <div className="cake-text">
                           <h4 className="money">$30</h4>
                           <h3 className="cake-name">Strawberry Cupcakes</h3>
                           <a className="pest-btn" href="#">Add to cart</a>
                        </div>
                     </div>
                     <div className="cake-feature-item">
                        <div className="cake-img">
                           <img src="./c-feature-3.jpg" alt="" />
                        </div>
                        <div className="cake-text">
                           <h4 className="money">$35</h4>
                           <h3 className="cake-name">Strawberry Cupcakes</h3>
                           <a className="pest-btn" href="#">Add to cart</a>
                        </div>
                     </div>
                     <div className="cake-feature-item">
                        <div className="cake-img">
                           <img src="./c-feature-4.jpg" alt="" />
                        </div>
                        <div className="cake-text">
                           <h4 className="money">$29</h4>
                           <h3 className="cake-name">Strawberry Cupcakes</h3>
                           <a className="pest-btn" href="#">Add to cart</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default BodyWelcome;