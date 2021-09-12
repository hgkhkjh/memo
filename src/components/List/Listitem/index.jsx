import React, { Component } from "react";
import "./index.css"

export default class Listitem extends Component {
  state = {
    mouse: false
  }
  //鼠标移入移出的操作
  up = (a) => {
    return()=>{
      this.setState({
        mouse:a
      })
    }
  }
  //点击check复选框触发事件
  checkcheange=(id)=>{
    // console.log(id);
    return(event)=>{
      // console.log(id,event);
      this.props.updatetodo(id,event.target.checked)
    }
  }
  //删除按钮的获取id从而确定item
  deletebtn=(id)=>{
    // console.log(a.target);
    //    this.props.deletetodo(a.id)
    //  console.log(id);
    return()=>{
      // console.log(id);
       //点击删除后的弹窗
       if(window.confirm('真的确定删除吗，亲~')){
        this.props.deletetodo(id)
      
      }
    }
   
  }

  render() {
    const {id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li style={{ backgroundColor: mouse ? 'rgb(240, 157, 171)' : 'white' }}
        onMouseEnter={this.up(true)}
        onMouseLeave={this.up(false)}
      >
        <label>
          <input type="checkbox" checked={done} onChange={this.checkcheange(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" 
        style={{ display: mouse?'block':'none' }}
        onClick={this.deletebtn(id)}
        >删除</button>
      </li>
    )
  }
}