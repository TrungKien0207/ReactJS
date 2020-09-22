import React, { Component } from 'react';
import { Prompt, Redirect } from "react-router-dom";

class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isBlocking: false,
         isRederect: false,
         txtName: '',
         txtEmail: '',
         txtPhone: '',
         txtMessage: '',
         city: 'hcm',
         inlineRadioOptions: 'nam',
         fileName: ''
      };
   }

   isInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      // console.log(event.target);
      this.setState({
         isBlocking: event.target.value.length > 0,
         [name] : value
      });
   }

   isFileChange = (event) => {
      this.setState({
         fileName: event.target.files[0].name
      });
   }

   submit = (event) => {
      event.preventDefault();
      event.target.reset();
      this.setState({
         isBlocking: false,
         isRederect: false
      });

      let content = '';
      content += 'Ho ten: ' + this.state.txtName;
      content += ' - Email: ' + this.state.txtEmail;
      content += ' - So dien thoai: ' + this.state.txtPhone;
      content += ' - Noi dung: ' + this.state.txtMessage;
      content += ' - Thanh pho: ' + this.state.city;
      content += ' - Gioi tinh: ' + this.state.inlineRadioOptions;
      content += ' - Hinh anh: ' + this.state.fileName;
      
      console.log(content);
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
                              <input type="text"  value={ this.state.txtName } name="txtName" className="form-control" id="inputEmail4"  onChange={ (event) => this.isInputChange(event) }/>
                           </div>
                        </div>

                        <div className="form-group">
                           <label htmlFor="inputEmail4">Email</label>
                           <input type="email" value={ this.state.txtEmail } name="txtEmail" className="form-control" id="inputEmail4" onChange={ (event) => this.isInputChange(event) }/>
                        </div>

                        <div className="form-group">
                           <label htmlFor="inputAddress2">Số điện thoại</label>
                           <input type="text" value={ this.state.txtPhone } name="txtPhone" className="form-control" id="inputAddress2" onChange={ (event) => this.isInputChange(event) }/>
                        </div>

                        <div className="form-group">
                           <label htmlFor="inputAddress2">Nội dung</label>
                           <textarea className="form-control" defaultValue={ this.state.txtMessage } name="txtMessage" aria-label="With textarea"  onChange={ (event) => this.isInputChange(event) }/>
                        </div>

                        <div className="form-group">
                           <label htmlFor="inputState">Thành phố</label>
                           <select id="inputState" value={ this.state.city } className="form-control" name="city" onChange={ (event) => this.isInputChange(event) } >
                              <option value="hn">Hà Nội</option>
                              <option value="hcm">Hồ Chí Minh</option>
                              <option value="dn">Đà Nẵng</option>
                              <option value="ct">Cần Thơ</option>
                           </select>
                        </div>

                        <div className="form-check-box">
                        <label htmlFor="inputState">Ngôn ngữ</label>
                           <div className="pl-4">
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="checkbox" id="inlineCheckbox1" defaultValue="option1" />
                                 <label className="form-check-label" htmlFor="inlineCheckbox1">PHP</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="checkbox" id="inlineCheckbox2" defaultValue="option2" />
                                 <label className="form-check-label" htmlFor="inlineCheckbox2">Javascript</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="checkbox" id="inlineCheckbox3" defaultValue="option2" />
                                 <label className="form-check-label" htmlFor="inlineCheckbox2">Python</label>
                              </div>
                              <div className="form-check form-check-inline">
                                 <input className="form-check-input" type="checkbox" id="inlineCheckbox4" defaultValue="option2" />
                                 <label className="form-check-label" htmlFor="inlineCheckbox2">C++</label>
                              </div>
                           </div>
                        </div>

                        <div className="form-check_radio">
                           <label htmlFor="inputState">Giới tính</label>
                           <div className="form-check">
                              <div>
                                 <div className="form-check">
                                    <input className="form-check-input" onChange={ (event) => this.isInputChange(event) } type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="nam" checked={ this.state.inlineRadioOptions === 'nam' }/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Nam</label>
                                 </div>
                                 <div className="form-check">
                                    <input className="form-check-input" onChange={ (event) => this.isInputChange(event) } type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="nu" checked={ this.state.inlineRadioOptions === 'nu' }/>
                                    <label className="form-check-label" htmlFor="inlineRadio2">Nữ</label>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="form-group">
                           <label htmlFor="exampleFormControlFile1">Hình ảnh</label>
                           <input type="file" onChange={ (event) => this.isFileChange(event) } name="imageFile"  className="form-control-file rounded border p-1 col-7" id="exampleFormControlFile1" />
                        </div>

                        <button type="submit" className="btn btn-danger">Submit</button>
                     </form>
                  </div>
               </section>
            </nav>
         </div>
      );
   }
}

export default Contact;