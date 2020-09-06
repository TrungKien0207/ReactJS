import React, { Component } from 'react';

class Review extends Component {
   render() {
      return (
         <div className="cake-review" id="detail">
            <div className="cake-review-img">
               <img src="./recipe-1.png" alt="" />
            </div>
            <div className="cake-review-text">
               <h4>Special Recipe</h4>
               <p>
               Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
               nisi ut aliquid ex ea commodi equatur uis autem vel eum.
               </p>
               <a className="pink-btn" href="#">View Details</a>
            </div>
         </div>
      );
   }
}

export default Review;