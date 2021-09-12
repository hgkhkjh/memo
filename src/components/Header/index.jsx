import React,{Component} from "react";
import PropTypes from 'prop-types'
import { nanoid } from "nanoid";
import "./index.css"

export default class Header extends Component{
    //对接收入的props进行类型。必要性的限制
    static propTypes={
      addtodo:PropTypes.func.isRequired
    }

    keyup=(event)=>{
     const {keyCode,target}=event
    //  如果去掉空格为空发出警告
     if(target.value.trim()===''){
        alert("不能什么都不输入哟")
        return
      }
    //   空格的keyCode为13判断输入的是否为空格
    // 如果不是回车返回
     if(keyCode!==13){
         return
     }
    //  如果是回车定义todoobj并把它传给app传过来的函数在传给app
     else{
        const todoObj={id:nanoid(),name:target.value,done:false}
        this.props.addtodo(todoObj)
        target.value=''
     }
      
    }
    render(){
        return(
            <div className="todo-header">
            <input type="text" onKeyUp={this.keyup} placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
        )
    }
}