import React, { Component } from 'react';
import Content from './Content';

class App extends Component {
   
   constructor(props) {
      super(props);
      console.log("Init");
      this.state = {
         component: "Component Init",
         fullname: "Kiên"
      };
   }

   componentWillMount() {
      console.log("component Will Mount");
   }

   componentDidMount() {
      console.log("component Did Mount");
   }

   updateState = () => {
      this.setState({
         component: "new state",
         fullname: "Hoàng Anh"
      });
   }

   shouldComponentUpdate(nextProps, nextState) {
      // if(nextState.component !== "new state") {
      //    return false;
      // }

      // return true;

      console.log("shouldComponentUpdate: " + nextState.component);
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log("componentWillUpdate: " + nextState.component);
   }

   componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate: " + prevState.component);
   }

   render() {
      console.log("render");
      console.log(this.state.component);
      return (
         <div className="App">
            <Content name={ this.state.fullname }></Content>
            <button onClick={ () => this.updateState() } type="button" className="btn btn-danger">Click me</button>
         </div>
      );
   }
}

export default App;
