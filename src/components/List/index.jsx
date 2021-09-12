import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./index.css"
import Listitem from "./Listitem";
export default class List extends Component {
     //对接收入的props进行类型。必要性的限制
     static propTypes={
        updatetodo:PropTypes.func.isRequired,
        todos:PropTypes.array.isRequired,
        deletetodo:PropTypes.func.isRequired

      }
 
    render() {
        // 解构赋值
        const {todos,updatetodo,deletetodo} = this.props
        return (
            <ul className="todo-main">
                {
                   todos.map(todo => {
                        return <Listitem key={todo.id} {...todo}
                         updatetodo={updatetodo}
                          deletetodo={deletetodo}/>
                    })
                }
            </ul>
        )
    }
}