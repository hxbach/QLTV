import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import React, { Component } from 'react';
import DataUser from './Data.json';
class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      hienThiForm: false,
      data: DataUser,
      searchText:''
    }
    
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
              ketNoi={() => this.doiTrangThai()}  hienThiForm={this.state.hienThiForm}/>
              <TableData dataUserProps={ketQua}/>
              <AddUser hienThiForm={this.state.hienThiForm} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

