import React, { Component } from 'react'
import InputContainer from './InputContainer';
import TaskList from './TaskList';

export default class Todo extends Component {
    state={
        //array of task
        taskList:[],
    }
    //delete the task
    deleteTask=(id)=>{
        let filteredArray=this.state.taskList.filter(function(task){
            return task.id!=id;
        })
        this.setState({
            taskList:filteredArray
        })

    }
    

    //add task to array
    addTask=(currTask)=>{
      //let currTask=this.state.currTask;
      //  let tempArr=[];
      //  for(let i=0;i<this.state.taskList.length;i++){
     //       tempArr.push(this.state.taskList[i])
     //   }
      //  tempArr.push(currTask)

      //2nd way
      let tempArr=[...this.state.taskList,{task:currTask,id:this.state.taskList.length}]

      this.setState({
          taskList:tempArr,
          currTask:""
      })
    }
    //pass the addtask with input container
    //tasklist pass the delete task and pass the list
    render() {
        return (
            <div>
                
                <InputContainer addtask={this.addTask}></InputContainer>
                <TaskList taskList={this.state.taskList}
                    dl={this.deleteTask}>
                </TaskList>
            </div>
        )
    }
}
