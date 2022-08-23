import React, { Component } from 'react'

export default class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:"",
      name:"",
      tel:"",
      permission:"  "
    }
  }
  
  isChange = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
 
  

  this.setState({
    [name]: value
  });

  // console.log(item);
  }

  kiemTraTrangThai = () =>{
    if(this.props.hienThiForm === true){
      return(      
      <div className="col">
        <div className="card border-primary mb-3 mt-2">
        <div className="card-header"> Thêm mới user vào hệ thống</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text" onChange={(event)=> this.isChange(event)} name ="name" className="form-control" placeholder="Tên User" />
          </div>
          <div className="form-group">
            <input type="text" onChange={(event)=> this.isChange(event)} name ="tel" className="form-control" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select className="custom-select" onChange={(event)=> this.isChange(event)} name ="permission" required>
              <option value>Quyền người dùng</option>
              <option value={1}>Admin</option>
              <option value={2}>Moderator</option>
              <option value={3}>User</option>
            </select>
          </div>
          <div className="form group">
            <div className="btn btn-block btn-primary" 
            onClick={(name,tel,permission)=>this.props.add(this.state.name,this.state.tel,this.state.permission)}>Thêm mới</div>
          </div>
        </div>
      </div>
      </div>

      )
    }
  }

  render() {
    // console.log(this.props.hienThiForm);
    return (
        <div>
          {this.kiemTraTrangThai()}

        </div>
    )
  }
}
