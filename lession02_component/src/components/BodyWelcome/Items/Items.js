import React, { Component } from 'react';

class Items extends Component {

   constructor(props) {
      super(props);
      this.state = {
         editing: false
      }
   }

   addProduct = (product) => {
      alert(product);
   }

   buttonEdit = () => {
      this.setState({ editing: true });
   }

   buttonSave = () => {
      this.setState({ editing: false });
      console.log(this.txtName.value);
   }

   renderNormal= () => {
      return (
         <div>
            <button className="pest-btn" onClick={ () => this.buttonEdit() }>Edit</button>
            <button className="pest-btn">Remove</button>
         </div>
      );
   }

   renderForm = () => {
      return (
         <div className="input-icon">
            <div>
               <input ref={ (input) => {this.txtName = input} } type="text" defaultValue={ this.props.children }/>
            </div>
            <div>
               <button className="pest-btn" onClick={ () => this.buttonSave() }>Save</button>
            </div>
         </div>
      );
   }

   show_button = () => {
      if( this.state.editing === false ) {
         return this.renderNormal();
      } else { 
         return this.renderForm(); 
      }
   }

   render() {
      return (
         <div className="cake-feature-item">
            <div className="cake-img">
               <img src={ this.props.images } alt="" />
            </div>
            <div className="cake-text">
               <h4 className="money">{ this.props.price }</h4>
               <h3 className="cake-name">{ this.props.children }</h3>
               <a href="a" className="pest-btn alert alert-success" onClick={ () => this.addProduct(this.props.children + ' was add') }>Add to cart</a>
               
               { this.show_button() }
            </div>
         </div>
      );
   }
}

export default Items;