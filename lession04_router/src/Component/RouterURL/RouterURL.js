import React, { Component } from 'react';
import {
   Switch,
   Route
} from "react-router-dom";
import Homee from '../Home/Homee';
import Products from '../product/Products';
import Contact from '../contact/Contact';
import Eri from '../error/Eri';

class RouterURL extends Component {
   render() {
      return (
         <div>
            <Switch>
               <Route exact path="/">
                  <Homee/>
               </Route>

               <Route path="/product">
                  <Products/>
               </Route>

               <Route path="/contact">
                  <Contact/>
               </Route>

               <Route>
                  <Eri/>
               </Route>
            </Switch>
         </div>
      );
   }
}

export default RouterURL;