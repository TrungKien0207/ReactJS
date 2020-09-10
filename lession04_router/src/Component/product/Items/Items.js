import React, { Component } from 'react';

class Items extends Component {
   render() {
      return (
         <div className="col mb-4">
            <div className="card border border-info rounded">
               <img src="https://loremflickr.com/320/240/paris,girl/all" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">{ this.props.children }</h5>
                  <p className="card-text text-justify">
                     Phú Quốc còn được mệnh danh là Đảo Ngọc, là hòn đảo lớn nhất của Việt Nam, cũng là đảo lớn nhất trong quần thể 22 đảo tại đây, nằm trong vịnh Thái Lan. 
                     Đảo Phú Quốc cùng với các đảo khác tạo thành huyện đảo Phú Quốc trực thuộc tỉnh Kiên Giang. 
                  </p>
                  <a href="#" className="btn btn-info float-right">
                     Chi tiết<i className="fas fa-chevron-right pl-1" />
                  </a>
               </div>
            </div>
         </div>
      );
   }
}

export default Items;