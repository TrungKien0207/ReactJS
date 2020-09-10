import React, { Component } from 'react';
import Course from './Course/Course';

class Homee extends Component {
   render() {
      return (
         <div>
            <nav className="home row pl-5 pr-5 pt-4">
               <article className="col-sm-9">
                  <div className="introduce bg-info p-5 rounded" style={{height: '16rem'}}>
                  <h1>ReactJS</h1>
                  <h4>Practice demo build a website with ReactJS</h4>
                  </div>
                  <div className="review row pt-2 pl-3 pr-3">
                     <Course>ReactJS</Course>
                     <Course>ReactJS</Course>
                     <Course>ReactJS</Course>
                     <Course>ReactJS</Course>
                     <Course>ReactJS</Course>
                     <Course>ReactJS</Course>
                  </div>
               </article>
               <aside className="col-sm-3">
                  <ul className="list-group">
                  <li className="list-group-item active">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  <li className="list-group-item">Link</li>
                  </ul>
               </aside>
            </nav>
         </div>
      );
   }
}

export default Homee;