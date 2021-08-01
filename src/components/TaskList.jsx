import React, { Component } from 'react'

export default class TaskList extends Component {
    //task list
    //dl delete task
    //tasklist is passed from parent
    render() {
        return (
            <div className="task-list">
                    <ul>
                    {
                        this.props.taskList.map((taskObj)=>{
                            return(
                                <li className="task" key={taskObj.id}>
                                    <p>{taskObj.task}</p>
                                    <button onClick={()=>{this.props.dl(taskObj.id)}}>Delete</button>
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
        )
    }
}
