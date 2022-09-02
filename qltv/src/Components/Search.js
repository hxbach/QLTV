import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: ''
    }
  }

  isShowEditUserForm =()=>{
      if(this.props.editUserStatus ===true){
        return <EditUser 
        userEditObject = {this.props.userEditObject}
        changEditUserStatus = {()=>this.props.changEditUserStatus()}/>
      }
  }

  isChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value
    });
    this.props.checkConnectionProps(this.state.tempValue);
  }

  hienThiNut = () => {
    if (this.props.hienThiForm === true) {

      return <div className='btn btn-block btn-outline-secondary' onClick={() => this.props.ketNoi()}>Đóng lại</div>
    }

    else {
      return <div className='btn btn-block btn-outline-info' onClick={() => this.props.ketNoi()}>Thêm mới</div>

    }
  }
  render() {
    return (
      <div className="col-12">
        {this.isShowEditUserForm()}
        <div className="form-group">
          <div className="btn-group mb-2">
            <input type="text" className="form-control" placeholder="Nhập từ khóa" />
            <div className="btn btn-info" >Tìm</div>
          </div>

          <div className="btn-group1">
            {this.hienThiNut()}
          </div>
        </div>
        <hr />
      </div>

    )
  }
}
