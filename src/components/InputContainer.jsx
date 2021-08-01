import React, { Component } from 'react'

export default class InputContainer extends Component {
    //state of the container
    state={
        currTask:""
    }
    //function to handle task
    handleCurrTask=(e)=>{
        let currValue=e.target.value;
        this.setState({
            currTask:currValue
        })
    }
    //function to send data to parent
    sendCurrentTaskToParent=()=>{
        this.props.addtask(this.state.currTask);
        this.setState({
            currTask:""
        })
    }
    render() {
        return (
            //input container
            <div className="input-container">
                    
                    <input type="text" value={this.state.currTask}
                    onChange={this.handleCurrTask} />
                    <button onClick={this.sendCurrentTaskToParent}>Submit</button>
                </div>
        )
    }
}
