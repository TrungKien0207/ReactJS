import React, { Component } from 'react';

class App extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         component: "Component Init"
      }
   }

   componentWillMount() {
      this.setState({ component: "component Will Mount" });
   }

   componentDidMount() {
      console.log("componentDidMount");
   }

   render() {
      console.log( this.state.component );
      return (
         <div className="App"></div>
      );
   }
}

export default App;
