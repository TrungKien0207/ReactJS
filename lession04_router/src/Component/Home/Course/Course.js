import React, { Component } from 'react';

class Course extends Component {
   render() {
      return (
         <div className="card col-sm-4 border border-warning " style={{width: '16rem'}}>
            <div className="card-body">
               <h5 className="card-title">{ this.props.children }</h5>
               <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
               <a href="a" className="btn btn-primary">Go somewhere</a>
            </div>
         </div>
      );
   }
}

export default Course;