import React, { Component } from 'react'

export default class EditUser extends Component {
  render() {
    return (
        <div className='row'>
        <div className="col-12">
        <form method='post'>
        <div className="card border-primary mb-3 mt-2">
        <div className="card-header text-center"> Sửa thông tin User</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text"  name ="name" className="form-control" placeholder="Tên User" />
          </div>
          <div className="form-group">
            <input type="text"  name ="tel" className="form-control" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select className="custom-select"  name ="permission" required>
              <option value>Quyền người dùng</option>
              <option value={1}>Admin</option>
              <option value={2}>Moderator</option>
              <option value={3}>User</option>
            </select>
          </div>
          <div className="form group">
            <input type="reset"  className="btn btn-block btn-primary" 
             value="Lưu"/>
          </div>
        </div>
      </div>
      </form>
      </div>
        </div>

    )
  }
}
