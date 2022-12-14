import React, { Component } from 'react'

export default class TableDataRow extends Component {
    permissionShow = () => {
        if(this.props.permission === 1){return "Admin";}
        else if(this.props.permission === 2){return "Moderator";}
        else {return "User";}

    }

    editClick = () =>{
      this.props.editFunClick();
      this.props.changeEditUserStatus();
    }
  render() {
    //props.editFunClick
    return (
        <tr>
        <td >{this.props.stt+1}</td>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning sua" onClick={()=>this.editClick()}> <i className="fa
                                           fa-edit " />Sửa</div>
            <div className="btn btn-danger xoa"> <i className="fa
                                              fa-trash-o " />Xóa</div>
          </div>
        </td>
      </tr>
    )
  }
}
