import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './Data.json';
import { v4 as uuidv4 } from 'uuid';


class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      hienThiForm: false,
      data: DataUser,
      searchText:'',
      editUserStatus: true
    }
    
  }

editUser = (user) => {
  console.log("abc");
  console.log(user);
}

  getNewUserData = (name,tel,permission) => { 
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission =permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    })
    console.log(item);
   
   }
  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    });
    console.log("Dữ liệu nhân được là" + this.state.searchText);

  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    })
  }
  // thongBao = () => { alert("Kết nối thành công"); }  
  render() {
    var ketQua = [];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    })
    console.log(ketQua);
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
              checkConnectionProps={(dl)=> this.getTextSearch(dl)}
              ketNoi={() => this.doiTrangThai()}  hienThiForm={this.state.hienThiForm}
              editUserStatus={this.state.editUserStatus}/>
              <TableData editFun ={(user)=>this.editUser(user)} dataUserProps={ketQua}/>
              <AddUser add={(name, tel,permission)=>this.getNewUserData(name, tel,permission)} hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

