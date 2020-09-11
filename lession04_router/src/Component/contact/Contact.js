import React, { Component } from 'react';

class Contact extends Component {
   render() {
      return (
         <nav className="pt-2 pl-5 pr-5">
            <section>
               <h2 className="introduce bg-secondary rounded p-3" style={{height: '5rem'}}>Liên hệ</h2>
            </section>

            <section className="row pl-3">
               <div className="contact1 col-sm-6 border border-danger pr-3">
                  
               </div>
               <div className="contact2 col-sm-6 pl-3">
                  <form>
                     <div >
                        <div className="form-group">
                           <label htmlFor="inputEmail4">Họ và tên</label>
                           <input type="text" className="form-control" id="inputEmail4" />
                        </div>
                     </div>
                     <div className="form-group">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="inputAddress2">Số điện thoại</label>
                        <input type="text" className="form-control" id="inputAddress2" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="inputAddress2">Nội dung</label>
                        <textarea className="form-control" aria-label="With textarea" name="content" defaultValue={""} />
                     </div>
                     <button type="submit" className="btn btn-primary">Sign in</button>
                  </form>
               </div>
            </section>
         </nav>

      );
   }
}

export default Contact;