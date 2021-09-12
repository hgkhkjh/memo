import React, { Component } from "react";
import "./index.css"
export default class Footer extends Component {
  //全选复选框的回调
  allcheck=(event)=>{
    // console.log(event.target.checked);
     this.props.footerallcek(event.target.checked)
  }
  deleteall=()=>{
  this.props.deleteall()

  }
  render() {
    const { ftodos } = this.props
    //统计已完成的个数
    const fintdnum = ftodos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0)
    }, 0)
    const total=ftodos.length
    // console.log(fintdnum);
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.allcheck} checked={fintdnum===total&&total!==0?true:false} />
        </label>
        <span style={{color:"white"}}>
          <span >已完{fintdnum}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.deleteall}>清除已完成任务</button>
      </div>
    )
  }
}