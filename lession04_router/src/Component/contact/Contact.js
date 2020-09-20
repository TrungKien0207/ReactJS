import React, { Component } from 'react';
import { Prompt, Redirect } from "react-router-dom";

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isBlocking: false,
         isRederect: false
      };
   }

   isInputChange = (event) => {
      // console.log(event.target.value.length > 0);
      this.setState({
         isBlocking: event.target.value.length > 0
      });
   }

   submit = (event) => {
      event.preventDefault();
      event.target.reset();
      this.setState({
         isBlocking: false,
         isRederect: true
      });
   }

   render() {
      if( this.state.isRederect ) {
         return (
            <Redirect to="/"/>
         )
      }

      return (
         <div>
            <Prompt
               when={ this.state.isBlocking }
               message={location =>
                  `Bạn có chắc sẽ đi tới trang ${location.pathname}`
               }
            />
            <nav className="pt-2 pl-5 pr-5">
               <section>
                  <h2 className="introduce bg-secondary rounded p-3" style={{height: '5rem'}}>Liên hệ</h2>
               </section>

               <section className="row pl-3">
                  <div className="contact1 col-sm-6 border border-danger pr-3">
                     
                  </div>
                  <div className="contact2 col-sm-6 pl-3">
                     <form onSubmit={ (event) => this.submit(event) }>
                        <div >
                           <div className="form-group">
                              <label htmlFor="inputEmail4">Họ và tên</label>
                              <input type="text" className="form-control" id="inputEmail4"  onChange={ (event) => this.isInputChange(event) }/>
                           </div>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputEmail4">Email</label>
                           <input type="email" className="form-control" id="inputEmail4" onChange={ (event) => this.isInputChange(event) }/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputAddress2">Số điện thoại</label>
                           <input type="text" className="form-control" id="inputAddress2" onChange={ (event) => this.isInputChange(event) }/>
                        </div>
                        <div className="form-group">
                           <label htmlFor="inputAddress2">Nội dung</label>
                           <textarea className="form-control" aria-label="With textarea" name="content" defaultValue={""} onChange={ (event) => this.isInputChange(event) }/>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign in</button>
                     </form>
                  </div>
               </section>
            </nav>
            </div>
      );
   }
}

export default Contact;