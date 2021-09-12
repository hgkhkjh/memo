import React from 'react';
import "./App.css"
import Footer from './components/footer';
import Header from './components/Header';
import List from './components/List';

class App extends React.Component {
  state = {
    todos: [
      { id: 0, name: '吃饭', done: true },
      { id: 1, name: '睡觉', done: false },
      { id: 2, name: '打代码', done: false }
    ]

  }
  
  addtodo=(todoObj)=>{
     const {todos}=this.state
     const newtodo=[todoObj,...todos]
     this.setState({
             todos:newtodo
     })
  }

   

  updatetodo=(id,done)=>{
    const {todos}=this.state
    const newTodos=todos.map((todoObj)=>{
      if(todoObj.id===id){
        //如果id对应上的话就返回他数组里所有的东西然后覆盖之前的done
        return{...todoObj,done}
      }
      else{
        return todoObj
      }
    })
    this.setState({todos:newTodos})
  }
  //删除对应的item
  deletetodo=(id)=>{
    const {todos}=this.state
    const newtodos=todos.filter((todoObj)=>{
     return todoObj.id!==id
    })
    //更新状态
    this.setState({
        todos:newtodos
    })
    }
    //页脚全选框点击把所有的done取反
    footerallcek=(done)=>{
     
      const {todos}=this.state
      const newtodos=todos.map((a)=>{
        return{...a,done:done}
      })
     this.setState({
       todos:newtodos
     })
    }
    //删除全部做完的
    deleteall=()=>{
     const {todos}=this.state
      const newtodos=todos.filter((a)=>{
        //返回没有完成的，把完成的过滤掉
         return a.done===false
      })
      this.setState({
        todos:newtodos
      })
    }
  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            {/* 让header里面输入的内容传给app然后在由他改变state */}
            <Header  addtodo={this.addtodo} />
            <List todos={this.state.todos} updatetodo={this.updatetodo} deletetodo={this.deletetodo} />
            <Footer ftodos={this.state.todos} footerallcek={this.footerallcek} deleteall={this.deleteall} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;