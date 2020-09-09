import React, { Component } from 'react';

class Content extends Component {
   componentWillReceiveProps(nextProps) {
      console.log("componentWillReceiveProps: " + nextProps.name);
   }

   shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate: " + nextProps.name);
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log("componentWillUpdate: " + nextProps.name);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate: " + prevProps.name);
   }

   componentWillUnmount() {
      console.log("component Will Mount");
   }
   

   render() {
      return (
         <div>{ this.props.name }</div>
      );
   }
}

export default Content;