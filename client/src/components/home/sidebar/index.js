import React, {Component} from "react";
import axios from 'axios';

import SidebarItem from "./SidebarItem";
import "./style.css";

class Sidebar extends Component {
 
  state = {
    cats : []
  }
  
  fetch = async () => {
    const response  = await axios.get('http://127.0.0.1:8000/category')
    this.setState({cats:response.data})
  }

  componentDidMount(){
    this.fetch()  
  }
  componentDidUpdate()

  componentDidCatch



  

  render(){
    return(
      <div>
        {this.state.cats.map(category => {
          return <SidebarItem key={category.id} title={category.name} icon="fab fa-500px" count="90" />
        })}
      </div>
    )
  }

}

export default Sidebar;

/*
= () => {
  return (
    <div className="sidebar">
      <SidebarItem title="Featured" icon="fab fa-500px" count="90" />
      <SidebarItem title="advertising" icon="fas fa-address-book" count="20" />
      <SidebarItem title="analytics" icon="fab fa-alipay" count="34" />
      <SidebarItem title="attribution" icon="fas fa-archive" count="15" />
      <SidebarItem title="live chat" icon="fas fa-address-book" count="66" />
      <SidebarItem title="mobile" icon="fab fa-500px" count="57" />
    </div>
  );
};*/