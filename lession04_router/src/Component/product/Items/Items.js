import React, { Component } from 'react';

class Items extends Component {
   to_slug(str) {
    // Chuyển hết sang chữ thường
      str = str.toLowerCase();     
   
      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
   
      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z-\s])/g, '');
   
      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');
   
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
   
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
   
      // return
      return str;
   }

   render() {
      return (
         <div className="col mb-4">
            <div className="card border border-info rounded">
               <img src="https://loremflickr.com/320/240/beach" className="card-img-top" alt="..." />
               <div className="card-body">
                  <h5 className="card-title">{ this.props.children }</h5>
                  <p className="card-text text-justify">
                     Phú Quốc còn được mệnh danh là Đảo Ngọc, là hòn đảo lớn nhất của Việt Nam, cũng là đảo lớn nhất trong quần thể 22 đảo tại đây, nằm trong vịnh Thái Lan. 
                     Đảo Phú Quốc cùng với các đảo khác tạo thành huyện đảo Phú Quốc trực thuộc tỉnh Kiên Giang. 
                  </p>
                  <h6>Giá tour: { this.props.price } VND</h6>
                  <a href={ "chi-tiet/" + this.props.pid + "/" + this.to_slug(this.props.children) + ".html"} className="btn btn-info float-right">
                     Chi tiết<i className="fas fa-chevron-right pl-1" />
                  </a>
               </div>
            </div>
         </div>
      );
   }
}

export default Items;